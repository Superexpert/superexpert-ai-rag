import pg from "pg";
import { criticalError, success, info } from "./console-messages";
import { randomUUID } from "crypto";
import pgvector from "pgvector/pg";

export class DB {
  private pool: pg.Pool;

  constructor(databaseUrl: string) {
    const { Pool } = pg;

    this.pool = new Pool({
      connectionString: databaseUrl,
    });

    this.pool.on("connect", async (client) => {
      await pgvector.registerTypes(client);
    });
  }

  async close() {
    await this.pool.end();
  }

  async verifyConnection() {
    let client: pg.PoolClient | undefined;
    try {
      client = await this.pool.connect();
      const res = await client.query("SELECT NOW()");
      success(`Verified database connection`);
    } catch (err) {
      criticalError(
        "Error connecting to the database.",
        (err as Error).message
      );
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  async verifyEmail(email: string) {
    const { rows } = await this.pool.query(
      "SELECT id FROM superexpert_ai_users WHERE email = $1",
      [email]
    );
    if (rows.length === 0) {
      criticalError(
        "Email not found in the database.",
        `Please check your email address in the corpus section of rag.config.js.`
      );
    }
    success(`Email verified: ${email}`);
    return rows[0].id;
  }

  async verifyCorpus(name: string, userId: string) {
    const { rows } = await this.pool.query(
      `SELECT id FROM superexpert_ai_corpus WHERE name = $1 AND "userId" = $2`,
      [name, userId]
    );
    if (rows.length === 0) {
      info(
        `Corpus not found in the database. Will create new corpus: ${name}.`
      );
    } else {
      success(`Corpus verified: ${name}`);
    }
    return rows[0]?.id;
  }

  async createCorpus(userId: string, name: string) {
    const id = randomUUID();
    const { rows } = await this.pool.query(
      `INSERT INTO superexpert_ai_corpus (id, "userId", name, description) VALUES ($1, $2, $3, $4) RETURNING id`,
      [id, userId, name, "Created by @superexpert-ai/rag"]
    );
    success(`Created new corpus: ${name}`);
    return rows[0].id;
  }

  async createCorpusFile(
    userId: string,
    corpusId: string,
    fileName: string,
    chunkSize: number,
    chunkOverlap: number
  ) {
    const id = randomUUID();
    const { rows } = await this.pool.query(
      `INSERT INTO "superexpert_ai_corpusFiles" (id, "userId", "corpusId", "fileName", "chunkSize", "chunkOverlap") 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [id, userId, corpusId, fileName, chunkSize, chunkOverlap]
    );
    success(`Created new corpus file: ${fileName}`);
    return rows[0].id;
  }

  async sendChunk(
    userId: string,
    corpusFileId: string,
    chunkText: string,
    embedding: number[] | null
  ): Promise<number> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO "superexpert_ai_corpusFileChunks"
         ("userId", chunk, "corpusFileId", embedding)
         VALUES ($1, $2, $3, $4)
         RETURNING id`,
        [
          userId,
          chunkText,
          corpusFileId,
          embedding ? pgvector.toSql(embedding) : null,
        ]
      );
      return result.rows[0].id;
    } finally {
      client.release();
    }
  }
}
