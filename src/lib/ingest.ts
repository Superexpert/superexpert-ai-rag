import { processFile } from "./process-file";
import progress from "cli-progress";
import fs from "node:fs";
import path from "node:path";
import { DB } from "./db";
import { plan } from "./plan";
import { celebrate, info } from "./console-messages";
import { OpenAIEmbeddingAdapter } from "./adapters/openai-embedding-adapter";

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
  } = await plan();

  // Init DB
  const db = new DB(connectionString);

  // Init Embedding Provider
  const embeddingAdapter = new OpenAIEmbeddingAdapter(apiKey);

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
    const { size: totalBytes } = await fs.promises.stat(file);
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
    const bar1 = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar1.start(totalBytes, 0);
    try {
      for await (const chunk of processFile(file, chunkSize, chunkOverlap)) {
        const embedding = await embeddingAdapter.getEmbedding(chunk.text);
        await db.sendChunk(userId, corpusFileId, chunk.text, embedding);
        bar1.increment(chunk.bytes);
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
