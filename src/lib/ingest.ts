import { processFile } from "./process-file";
import path from "node:path";
import { DB } from "./db";
import { plan } from "./plan";
import { celebrate, info } from "./console-messages";
import { OpenAIEmbeddingAdapter } from "./adapters/openai-embedding-adapter";
import { getProgressBar } from "./progress-bar";
import { readFileAsText } from "./pdf-utils";

export async function ingest() {
  // Execute plan to ensure everything is set up correctly
  let {
    connectionString,
    userId,
    corpusId,
    corpusName,
    files,
    chunkSize,
    chunkOverlap,
    apiKey,
    tokensPerMinute,
    requestsPerMinute,
  } = await plan();
  console.log(); 

  // Init DB
  const db = new DB(connectionString);
  try {
    // Init Embedding Provider
    const embeddingAdapter = new OpenAIEmbeddingAdapter(apiKey, {
      tokensPerMinute,
      requestsPerMinute,
    });

    // Ensure corpus exists
    if (!corpusId) {
      info(`Creating new corpus: ${corpusName}`);
      corpusId = await db.createCorpus(userId, corpusName);
    }

    // Process each file
    let fileCount = 0;
    for (const file of files) {
      fileCount++;
      const shortName = path.basename(file);

      /* 1️⃣  look (or create) corpusFile row */
      const corpusFileId = await db.createCorpusFile(
        userId,
        corpusId,
        shortName,
        chunkSize,
        chunkOverlap
      ); // implement as INSERT … ON CONFLICT DO NOTHING RETURNING id

      /* 2️⃣  where did we stop last time?  (-1 if never started) */
      const lastChunk = (await db.getLastCheckpoint(corpusFileId)) ?? -1;

      /* 3️⃣  read file text + total unique bytes (for correct progress %) */
      const text = await readFileAsText(file);
      const totalBytes = Buffer.byteLength(text, "utf8");

      // Show preamble
      let preamble = `Processing ${shortName} (file ${fileCount}/${files.length})`;
      if (lastChunk > -1) {
        preamble += ` – resume from chunk ${lastChunk + 1}`;
      }
      info(preamble);

      const bar = getProgressBar();
      bar.start(totalBytes, 0);

      /* 4️⃣  iterate over chunks, skipping the ones we already stored */
      let newChunks = 0; // keep track to decide “already complete”
      for await (const chunk of processFile(text, chunkSize, chunkOverlap)) {
        const i = chunk.index; // 0-based sequential index

        /* already in DB? just advance the bar and continue */
        if (i <= lastChunk) {
          bar.increment(chunk.uniqueBytes);
          continue;
        }

        /* need to ingest */
        const vec = await embeddingAdapter.getEmbedding(
          chunk.text,
          chunk.tokenCount
        );

        await db.sendChunk(
          userId,
          corpusFileId,
          i, // <- chunkIndex for idempotency
          chunk.text,
          vec
        );

        bar.increment(chunk.uniqueBytes);
        newChunks++;
      }
      bar.stop();

      if (newChunks === 0) {
        info(`✓ ${shortName} already fully ingested. Skipped.`);
      } else {
        await db.markCorpusFileDone(corpusId, corpusFileId);
        celebrate(`✓ ${shortName} – added ${newChunks} new chunks.`);
      }
    }

    if (fileCount === 1) {
      celebrate(`Ingest completed for 1 file.`);
    } else {
      celebrate(`Ingest completed for ${fileCount} files.`);
    }
  } finally {
    // <-- guarantees pool is closed even if you ^C or an error bubbles up
    await db.close();
  }
}
