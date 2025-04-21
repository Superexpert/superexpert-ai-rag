import { PrismaClient } from '@prisma/client'; 

export class DB {

    private prisma: PrismaClient;

    constructor(databaseUrl: string) {
        // Set the DATABASE_URL environment variable dynamically
        process.env.DATABASE_URL = databaseUrl;

        // Now you can instantiate the Prisma Client
        this.prisma = new PrismaClient();
    }


    async verifyCorpus(name: string) {
        const corpus = await this.prisma.corpus.findFirst({
            where: {
                name: name,
            },
        });
        return corpus;
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

}