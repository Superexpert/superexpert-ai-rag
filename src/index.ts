#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { loadConfig, initConfig } from './lib/config';
import { ingest } from './lib/ingest';
import path from 'path';

yargs(hideBin(process.argv))
   .command('run', 'Chunk & embed files', () => {}, async argv => {
      console.log('Running ingest...');
      const cfg = await loadConfig();
      await ingest(cfg);
   })
   .command({
      command: 'init',
      describe: 'Create rag.config.js template',
      handler: async () => {
         await initConfig();
      }
   })
   .option('resume', { type:'boolean', default:true })
   .strict()
   .demandCommand()
   .help()
   .argv;

   yargs.parse(); 