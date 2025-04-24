import fs from "node:fs";
import path from "node:path";

export async function loadConfig() {
  const pathToConfig = path.join(process.cwd(), "rag.config.js");
  if (!fs.existsSync(pathToConfig)) {
    return null;
  }
  const cfg = require(pathToConfig);
  return cfg.default;
}

export async function initConfig(cwd = process.cwd()) {
  const target = path.join(cwd, "rag.config.js");
  if (fs.existsSync(target)) {
    console.error("✔️  rag.config.js already exists – aborting.");
    process.exit(1);
  }

  const template = `#!/usr/bin/env node
/**
 * Superexpert.AI – Retrieval‑Augmented Generation tool configuration
 * See docs: https://superexpert.ai/docs/
 */
export default {
  db: {
    // Connection string to your PostgreSQL database
    connectionString: 'postgresql://<your email>@localhost:5432/<your database>'
  },
  files: [
    // Globs are convenient for whole directories
    '../docs/**/*.txt',
    '../more-docs/**/*.pdf',
    './knowledge/*.md'
  ],
  corpus: {
    // Enter your registered Superexpert.AI email address
    // If the Corpus does not exist, it will be created
    email: "<Your Email Address>",
    name: 'My Corpus', 
  },
  chunk: {
    // Number of tokens per chunk. A lower number means more accurate results
    // but it takes longer to chunk your documents.
    chunkSize: 250, 
    // The percentage of overlap between chunks.
    chunkOverlap: 15
  },
  embedding: {
    // Your OpenAI API Key
    // Use apiKey: process.env.OPENAI_API_KEY to retrieve from an environment variable
    apiKey: '<Your OpenAI API Key>',
    // Ensure that you do not exceed the OpenAI rate limits
    // See https://platform.openai.com/docs/guides/rate-limits
    tokensPerMinute: 90_000,
    requestsPerMinute: 1_000,
  }
};
`;

  fs.writeFileSync(target, template, "utf8");
  console.log("✨ Created rag.config.js");
}
