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
  ): Promise<string> {
    const id = randomUUID();

    const { rows } = await this.pool.query(
      `INSERT INTO "superexpert_ai_corpusFiles"
              ("id","userId","corpusId","fileName",
               "chunkSize","chunkOverlap")
       VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT ("corpusId","fileName")
       DO UPDATE SET
           "chunkSize"    = EXCLUDED."chunkSize",
           "chunkOverlap" = EXCLUDED."chunkOverlap"
       RETURNING "id"`,
      [id, userId, corpusId, fileName, chunkSize, chunkOverlap]
    );
    return rows[0].id;        // same UUID on second run
  }

  /**
   * Stores one chunk + updates the resume pointer in a single ACID txn.
   *
   * @param userId        ─ owner of the data
   * @param corpusFileId  ─ FK to corpusFiles.id
   * @param chunkIndex    ─ 0-based sequential index of the chunk
   * @param chunkText     ─ raw text
   * @param embedding     ─ 1536-dim vector  (null if you defer embedding)
   */
  async sendChunk(
    userId: string,
    corpusFileId: string,
    chunkIndex: number,
    chunkText: string,
    embedding: number[] | null
  ): Promise<number | null> {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");

      /* 1️⃣  insert chunk, ignore if it already exists */
      const insertChunk = await client.query(
        `INSERT INTO "superexpert_ai_corpusFileChunks"
              ("userId", "corpusFileId", "chunkIndex", chunk, embedding)
       VALUES ($1,$2,$3,$4,$5)
       ON CONFLICT ("corpusFileId","chunkIndex") DO NOTHING
       RETURNING id`,
        [
          userId,
          corpusFileId,
          chunkIndex,
          chunkText,
          embedding ? pgvector.toSql(embedding) : null,
        ]
      );

      /* 2️⃣  upsert / advance checkpoint  (monotonic) */
      await client.query(
        `INSERT INTO "superexpert_ai_corpusFileProgress"
              ("corpusFileId", "lastChunk")
       VALUES ($1,$2)
       ON CONFLICT ("corpusFileId")
       DO UPDATE SET "lastChunk" = GREATEST(
           EXCLUDED."lastChunk",             -- new value
           "superexpert_ai_corpusFileProgress"."lastChunk"
       )`,
        [corpusFileId, chunkIndex]
      );

      await client.query("COMMIT");

      /* if the chunk was a duplicate, RETURNING set is empty → return null */
      return insertChunk.rows[0]?.id ?? null;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  }

  async getLastCheckpoint(corpusFileId: string) {
    const { rows } = await this.pool.query(
      `SELECT "lastChunk" FROM "superexpert_ai_corpusFileProgress" WHERE "corpusFileId" = $1`,
      [corpusFileId]
    );
    if (rows.length === 0) {
      return null;
    }
    return rows[0].lastChunk;
  }


}
