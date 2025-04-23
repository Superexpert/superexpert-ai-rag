#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { initConfig } from "./lib/config";
import { ingest } from "./lib/ingest";
import { plan } from "./lib/plan";
import { celebrate } from "./lib/console-messages";

yargs(hideBin(process.argv))
  .command({
    command: "plan",
    describe: "Ensure everything is set up correctly",
    handler: async () => {
      await plan();
      celebrate(
        `All checks passed! Execute "@superexpert-ai/rag run" to start upload.`
      );
    },
  })
  .command(
    "run",
    "Chunk & ingest files",
    () => {},
    async (argv) => {
      await ingest();
    }
  )
  .command({
    command: "init",
    describe: "Create rag.config.js template",
    handler: async () => {
      await initConfig();
    },
  })
  .command({
    command: "*",
    describe: "Default command (runs plan)",
    handler: async () => {
      await plan();
    },
  })
  .option("resume", { type: "boolean", default: true })
  .strict()
  .help().argv;
