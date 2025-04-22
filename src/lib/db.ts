import pg from 'pg';


export class DB {

    private pool: pg.Pool;

    constructor(databaseUrl: string) {
        const { Pool } = pg;

        this.pool = new Pool({
          connectionString: databaseUrl,
        });
    }


    async verifyCorpus(name: string) {
        const { rows } = await this.pool.query(
            'SELECT id FROM superexpert_ai_users WHERE email = $1',
            ['stephen.walther@superexpert.com'],
          );
          console.log("matching rows");
          console.log(rows);
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