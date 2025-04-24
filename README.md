# Superexpert.AI RAG Tool for Retrieval-Augmented Generation

This tool enables you to chunk and upload documents to the Superexpert.AI Platform.
* It supports both text files (txt, md, JSON, CSV) and PDF files.
* It gracefully handles interruptions. If you are uploading a large number of files then you can restart.
* It respects OpenAI rate limits.

## Getting Started
To use the tool, execute the following command in terminal:
```
npx @superexpert-ai/rag
```

When you run the tool without any options, the tool verifies that it has all of the configuration information needed to start uploading files.