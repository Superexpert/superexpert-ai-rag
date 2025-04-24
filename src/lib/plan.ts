import { loadConfig } from "./config";
import { criticalError, success, celebrate } from "./console-messages";
import { DB } from "./db";
import { OpenAIEmbeddingAdapter } from "./adapters/openai-embedding-adapter";
import fg from 'fast-glob';


export async function plan() {
  // Check for configuration file
  const cfg = await loadConfig();
  if (!cfg) {
    criticalError(
      "Configuration file rag.config.js not found.",
      `Please run "npx @superexpert-ai/rag init" to create one.`
    );
  }

  // Check database connection
  if (!cfg.db?.connectionString) {
    criticalError(
      "Database connection string is missing in the configuration file.",
      "Please provide a valid connection string in the db section of rag.config.js."
    );
  }
  const connectionString = cfg.db.connectionString;
  const db = new DB(connectionString);
  await db.verifyConnection();

  // Check whether email exists
  if (!cfg.corpus?.email) {
    criticalError(
      "Email is missing in the configuration file.",
      "Please provide a valid email address in the corpus section of rag.config.js."
    );
  }
  const userId = await db.verifyEmail(cfg.corpus.email);

  // Check whether corpus (corpus name + user id) already exists
  if (!cfg.corpus?.name) {
    criticalError(
      "Corpus name is missing in the configuration file.",
      "Please provide a valid corpus name in the corpus section of rag.config.js."
    );
  }
  const corpusName = cfg.corpus.name;
  const corpusId = await db.verifyCorpus(corpusName, userId);

  // Check Embedding Provider API key
  if (!cfg.embedding?.apiKey) {
    criticalError(
      "OpenAI API key is missing in the configuration file.",
      "Please provide a valid OpenAI API key in the embedding section of rag.config.js."
    );
  }
  const apiKey = cfg.embedding.apiKey;
  const embeddingAdapter = new OpenAIEmbeddingAdapter(apiKey);
  await embeddingAdapter.verifyAPIKey();

  // List files to upload
  if (!cfg.files) {
    criticalError(
      "Files to upload are missing in the configuration file.",
      "Please provide a list of files in rag.config.js."
    );
  }
  if (cfg.files.length === 0) {
    criticalError(
      "No files to upload.",
      "Please provide at least one file in the files section of rag.config.js."
    );
  }
  const files = await expandGlobs(cfg.files);
  if (files.length === 0) {
    criticalError(
      "No files found matching the specified patterns.",
      "Please check the file patterns in the files section of rag.config.js."
    );
  }
  success(`Files verified: ${files.length} files found to upload.`);
  // Check chunk size and overlap
  if (!cfg.chunk?.chunkSize) {
    criticalError(
      "Chunk size is missing in the configuration file.",
      "Please provide a valid chunk size in the chunk section of rag.config.js."
    );
  }
  if (cfg.chunk?.chunkOverlap === undefined) {
    criticalError(
      "Chunk overlap is missing in the configuration file.",
      "Please provide a valid chunk overlap in the chunk section of rag.config.js."
    );
  }
  const chunkSize = parseInt(cfg.chunk.chunkSize);
  const chunkOverlap = parseInt(cfg.chunk.chunkOverlap);
  if (chunkSize < 50 || chunkSize > 8192) {
    criticalError(
      "Chunk size must be a number between 50 and 8,192.",
      "Please provide a valid chunk size in the chunk section of rag.config.js."
    );
  }
  success(`Chunk size verified: ${chunkSize} tokens.`);
  if (chunkOverlap < 0 || chunkOverlap > 50) {
    criticalError(
      "Chunk overlap must be a number between 0 and 50.",
      "Please provide a valid chunk overlap in the chunk section of rag.config.js."
    );
  }
  success(`Chunk overlap verified: ${chunkOverlap}%.`);

  // Check Tokens Per Minute and Requests Per Minute
  if (!cfg.embedding?.tokensPerMinute) {
    criticalError(
      "tokensPerMinute is missing in the configuration file.",
      "Please provide a valid Tokens per Minute in the embedding section of rag.config.js."
    );
  }
  const tokensPerMinute = parseInt(cfg.embedding.tokensPerMinute);
  if (Number.isNaN(tokensPerMinute) || tokensPerMinute < 1 ) {
    criticalError(
      "Tokens per minute must be a number greater than 0.",
      "Please provide a valid Tokens per Minute in the embedding section of rag.config.js."
    );
  }
  success(`Tokens per Minute verified: ${tokensPerMinute}.`);

  if (!cfg.embedding?.requestsPerMinute) {
    criticalError(
      "requestsPerMinute is missing in the configuration file.",
      "Please provide a valid Requests per Minute in the embedding section of rag.config.js."
    );
  }
  const requestsPerMinute = parseInt(cfg.embedding.requestsPerMinute);
  if (Number.isNaN(requestsPerMinute) || requestsPerMinute < 1 ) {
    criticalError(
      "Requests per minute must be a number greater than 0.",
      "Please provide a valid Requests per Minute in the embedding section of rag.config.js."
    );
  }
  success(`Requests per Minute verified: ${requestsPerMinute}.`);


  // Everything is good, let's proceed


  await db.close();

  return {
    connectionString,
    corpusId,
    corpusName,
    userId,
    files,
    chunkSize,
    chunkOverlap,
    apiKey,
    tokensPerMinute,
    requestsPerMinute,
  }
}


export async function expandGlobs(patterns: string[], cwd = process.cwd()) {
  return fg(patterns, {
    cwd,                       // base dir
    absolute: true,            // always return absolute paths
    onlyFiles: true,           // skip directories
    ignore: ['**/node_modules/**', '**/.git/**'],  // perf!
    dot: false,                // ignore dotfiles by default
    followSymbolicLinks: false // safer for user home dirs
  });
}
