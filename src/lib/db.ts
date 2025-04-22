import pg from "pg";
import { criticalError, success, info } from "./console-messages";

export class DB {
  private pool: pg.Pool;

  constructor(databaseUrl: string) {
    const { Pool } = pg;

    this.pool = new Pool({
      connectionString: databaseUrl,
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



}

// async createCorpus(name: string) {
//     const corpus = await this.prisma.corpus.create({
//         data: {
//             name: name,
//         },
//     });
//     return corpus;
// }
// async createCorpusFile(corpusId: string, fileName: string) {
//     const corpusFile = await this.prisma.corpusFiles.create({
//         data: {
//             name: fileName,
//             corpusId: corpusId,
//         },
//     });
//     return corpusFile;
// }
// async createChunk(corpusFileId: number, text: string, index: number, fileName: string, tokenCount: number) {
//     const chunk = await this.prisma.corpusFileChunks.create({
//         data: {
//             text: text,
//             index: index,
//             fileName: fileName,
//             tokenCount: tokenCount,
//             corpusFileId: corpusFileId,
//         },
//     });
//     return chunk;
// }
// async getCorpusFiles(corpusId: number) {
//     const corpusFiles = await this.prisma.corpusFiles.findMany({
//         where: {
//             corpusId: corpusId,
//         },
//     });
//     return corpusFiles;
// }

//}
