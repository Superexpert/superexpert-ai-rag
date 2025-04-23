import { processFile } from "./process-file";
import fs from "node:fs";
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

  // Init DB
  const db = new DB(connectionString);

  // Init Embedding Provider
  const embeddingAdapter = new OpenAIEmbeddingAdapter(
    apiKey,
    { tokensPerMinute, requestsPerMinute} 
  );

  // Ensure corpus exists
  if (!corpusId) {
    info(`Creating new corpus: ${corpusName}`);
    corpusId = await db.createCorpus(userId, corpusName);
  }

  // Process each file
  let fileCount = 0;
  for (const file of files) {
    fileCount++;
    const fileShortName = path.basename(file);

    // Get total bytes
    const fileText   = await readFileAsText(file);          // NEW – use your helper
    const totalBytes = Buffer.byteLength(fileText, "utf8"); // NEW

    console.log(
      `Processing file: ${fileShortName} (${fileCount} of ${files.length})`
    );
    // Create a new corpus file
    const corpusFileId = await db.createCorpusFile(
      userId,
      corpusId,
      fileShortName,
      chunkSize,
      chunkOverlap
    );

    // Create a progress bar
    const bar1 = getProgressBar();
    bar1.start(totalBytes, 0);
    try {
      for await (const chunk of processFile(fileText, chunkSize, chunkOverlap)) {
        const vec = await embeddingAdapter.getEmbedding(
          chunk.text,
          chunk.tokenCount   // pass the count so the limiter knows the weight
        );
        await db.sendChunk(userId, corpusFileId, chunk.text, vec);
        bar1.increment(chunk.uniqueBytes);
      }
    } catch (error) {
      console.error(`Error processing file ${fileShortName}:`, error);
      // Handle error (e.g., log it, skip the file, etc.)
      // You might want to throw the error or continue based on your needs
      throw error;
    }
    bar1.stop();
  }
  if (fileCount === 1) {
    celebrate(`Ingest completed for 1 file.`);
  } else {
    celebrate(`Ingest completed for ${fileCount} files.`);
  }

 
}

