
import fs from 'node:fs';
import path from 'node:path';

export async function loadConfig() {
    const pathToConfig = path.join(process.cwd(), 'rag.config.js');
    const cfg = require(pathToConfig); 
    return cfg.default;
}

export async function initConfig(cwd = process.cwd()) {
  const target = path.join(cwd, 'rag.config.js');
  if (fs.existsSync(target)) {
    console.error('✔️  rag.config.js already exists – aborting.');
    process.exit(1);
  }

  const template = `#!/usr/bin/env node
/**
 * Superexpert.AI – Retrieval‑Augmented Generation tool configuration
 * See docs: https://github.com/superexpert/superexpert-ai-rag
 */
/** @type {import('@superexpert/rag-tool').RagConfig} */
export default {
  db: {
    // Single source of truth – picked up by both CLI and NextJS 15 server
    connectionString: 'postgresql://user:pass@host/db'
  },
  files: [
    // Globs are convenient for whole directories
    './docs/**/*.pdf',
    './knowledge/*.md'
  ],
  chunk: {
    maxTokens: 1024,
    overlapTokens: 128
  },
  embedding: {
    provider: 'openai',
    model: 'text-embedding-3-small',
    batch: 100
  }
};
`;

  fs.writeFileSync(target, template, 'utf8');
  console.log('✨ Created rag.config.js');
}
