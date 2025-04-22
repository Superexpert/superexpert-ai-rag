import { loadConfig } from "./config";
import { criticalError, success, celebrate } from "./console-messages";
import { DB } from "./db";

export async function plan() {

  // Check for configuration file
  const cfg = await loadConfig();
  if (!cfg) {
    criticalError(
        "Configuration file rag.config.js not found.",
        `Please run "@superexpert-ai/rag init" to create one.`
      );
  }

  // Check database connection
  if (!cfg.db?.connectionString) {
    criticalError(
      "Database connection string is missing in the configuration file.",
      "Please provide a valid connection string in the db section of rag.config.js."
    );
  }
  const db = new DB(cfg.db.connectionString);
  await db.verifyConnection();

  // Check whether email exists
  if (!cfg.corpus?.email) {
    criticalError(
      "Email is missing in the configuration file.",
      "Please provide a valid email address in the corpus section of rag.config.js."
    );
  }

  const userId = await db.verifyEmail(cfg.corpus.email);

  // Check whether corpus (corpus name + email) already exists

  // Check OpenAI API key

  // List files to upload


  // success
  celebrate(`All checks passed! Run "@superexpert-ai/rag run" to start upload.`);

  await db.close();
}
