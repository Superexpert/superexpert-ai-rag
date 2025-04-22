#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { loadConfig, initConfig } from "./lib/config";
import { ingest } from "./lib/ingest";
import { plan } from "./lib/plan";
import path from "path";

yargs(hideBin(process.argv))
  .command({
    command: "plan",
    describe: "Ensure everything is set up correctly",
    handler: async () => {
      await plan();
    },
  })
  .command(
    "run",
    "Chunk & ingest files",
    () => {},
    async (argv) => {
      console.log("Running ingest...");
      const cfg = await loadConfig();
      await ingest(cfg);
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
