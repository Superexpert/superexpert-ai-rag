import { processFile } from './process-file';
import  progress  from 'cli-progress';
import fs from 'node:fs';
import { DB } from './db';

export async function plan() {
    console.log('Planning ingest...');
}


export async function ingest(cfg:any) {

    // // Ensure corpus exists
    // await ensureCorpus(cfg);

    // // Display list of files to be processed
    // console.log('Files to be processed:');
    // if (!cfg.files || cfg.files.length === 0) {
    //     console.error('No files specified in the configuration.');
    //     process.exit(1);
    // }
    // // Expand globs to actual file paths
    // const files = await expandGlobs(cfg.files);
    // if (files.length === 0) {
    //     console.error('No files found matching the specified patterns.');
    //     process.exit(1);
    // }
    // // Display the files
    // files.forEach((file: string) => {
    //     console.log(`- ${file}`);
    // });
    // cfg.files.forEach((file: string) => {
    //     console.log(`- ${file}`);
    // });
    // // Verify database connection
    // if (!cfg.db || !cfg.db.connectionString) {
    //     console.error('Database connection string is missing in the configuration.');
    //     process.exit(1);
    // }

    // // Process each file
    // for (const file of files) {
    //     const { size: totalBytes } = await fs.promises.stat(file);
    //     console.log(`Processing file: ${file} with size: ${totalBytes} bytes`);
    //     // Create a progress bar
    //     const bar1 = new progress.SingleBar({}, progress.Presets.shades_classic);
    //     bar1.start(totalBytes, 0);
    //     try {
    //         for await (const chunk of processFile(file, cfg.chunk.chunkSize, cfg.chunk.chunkOverlap)) {
    //             // await sendChunk(/* corpusFileId */, chunk.text, chunk.index, path.basename(file), chunk.tokenCount);

    //             bar1.increment(chunk.bytes);
    //         }
    //     } catch (error) {
    //         console.error(`Error processing file ${file}:`, error);
    //         // Handle error (e.g., log it, skip the file, etc.)
    //         // You might want to throw the error or continue based on your needs
    //         throw error;
    //     }
    //     bar1.stop();
    //     console.log('Ingest completed.');
    
    // }



    //console.dir(cfg, { depth: null });
}





