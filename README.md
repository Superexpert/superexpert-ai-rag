# Superexpert.AI RAG Tool

A robust CLI utility for chunking and uploading documents to the Superexpert.AI platform, facilitating efficient Retrieval-Augmented Generation (RAG) workflows.

---

## 🚀 Features
* **Versatile File Support**: Handles .txt, .md, .json, .csv, and .pdf formats.
* **Resumable Uploads**: Gracefully handles interruptions; resume processing without data loss.
* **OpenAI Rate Limit Compliance**: Configurable to respect OpenAI’s token and request per minute limits.
* **Automated Corpus Management**: Automatically creates and manages corpora within Superexpert.AI.
* **Progress Visualization**: Real-time progress bars for monitoring file processing.

---

## 📦 Installation

Ensure you have Node.js installed. Then, run:
```bash
npx @superexpert-ai/rag
```
This command executes the tool without the need for a global installation.

---

## ⚙️ Configuration

On first run, if no configuration is found, you’ll see:
```
❌ Configuration file rag.config.js not found.
Please run "@superexpert-ai/rag init" to create one.
```
Generate a configuration file with:

```bash
npx @superexpert-ai/rag init
```

This creates a rag.config.js file in your current directory.

**Example rag.config.js**
```js
module.exports = {
  db: {
    connectionString: "postgresql://user:password@host:port/database",
  },
  corpus: {
    email: "user@example.com",
    name: "my-corpus",
  },
  files: ["docs/**/*.pdf", "notes/*.md"],
  chunk: {
    chunkSize: 500,
    chunkOverlap: 0.1,
  },
  embedding: {
    apiKey: "your-openai-api-key",
    tokensPerMinute: 90000,
    requestsPerMinute: 1000,
  },
};
```
### Configuration Options:
* db.connectionString: PostgreSQL connection string for Superexpert.AI.
* corpus.email: Registered email with Superexpert.AI.
* corpus.name: Name of the corpus; created if it doesn’t exist.
* files: Array of file paths or glob patterns to process.
* chunk.chunkSize: Number of tokens per chunk.
* chunk.chunkOverlap: Overlap ratio between chunks (e.g., 0.1 for 10%).
* embedding.apiKey: Your OpenAI API key.
* embedding.tokensPerMinute: Max tokens per minute to comply with OpenAI limits.
* embedding.requestsPerMinute: Max requests per minute to comply with OpenAI limits. ￼

---

## 📄 Usage

After configuring, start the ingestion process:
```bash
npx @superexpert-ai/rag
```
The tool will:
1. Validate configuration and database connection.
2. Create or verify the specified corpus.
3. Process and chunk specified files.
4. Generate embeddings via OpenAI.
5. Upload chunks to Superexpert.AI.

If interrupted, rerun the command to resume from the last processed chunk.

![Uploading Files](docs/uploaded.png)

---

## 🧪 Testing Your Corpus

After uploading, test your corpus within Superexpert.AI:
1. Navigate to the Corpora section.
2. Next to your corpus click Test.
3. Enter queries to evaluate retrieval performance.
4. Adjust the `Similarity Threshold` to fine-tune results.

![Uploading Files](docs/test.png)


---

## 🛠️ Troubleshooting
* **Missing Configuration**: Ensure rag.config.js exists in your working directory.
* **Database Connection Errors**: Verify your connectionString is correct and the database is accessible.
* **OpenAI Rate Limit Errors**: Adjust tokensPerMinute and requestsPerMinute to comply with your OpenAI plan limits.

---

## 📄 License

This project is licensed under the MIT License. ￼

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

For more information and support, visit Superexpert.AI.

