import fs from "node:fs/promises";
import path from "node:path";
import pdfParse from "pdf-parse";                // npm i pdf-parse

/**
 * Reads a local file and returns *plain text*.
 * Falls back to raw UTF-8 for non-PDF documents.
 */
export async function readFileAsText(filePath: string): Promise<string> {
  const ext = path.extname(filePath).toLowerCase();
  const data = await fs.readFile(filePath);

  if (ext === ".pdf") {
    // pdf-parse returns { text, numpages, info, metadata, ... }
    const { text } = await pdfParse(data);       // 🚀 fast Poppler backend
    return text;
  }

  // assume UTF-8 text for everything else
  return data.toString("utf8");
}