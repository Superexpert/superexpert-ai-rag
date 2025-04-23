// process-file.ts -----------------------------------------------------------
import { encodingForModel } from "js-tiktoken";
import { readFileAsText } from "./pdf-utils";

export interface Chunk {
  index: number;
  text: string;
  tokenCount: number;
  bytes: number;
  uniqueBytes: number;
}

export async function* processFile(
  fileText: string,
  chunkSize: number,
  chunkOverlap: number
): AsyncGenerator<Chunk> {
  const enc = encodingForModel("text-embedding-3-small");
  const overlap = Math.floor((chunkOverlap / 100) * chunkSize);

  const tokens = Array.from(enc.encode(fileText)); // number[]

  let idx = 0;
  for (let start = 0; start < tokens.length; start += chunkSize - overlap) {
    const slice = tokens.slice(start, start + chunkSize);
    yield {
      index: idx++,
      text: enc.decode(slice), // decode once
      tokenCount: slice.length,
      bytes: Buffer.byteLength(enc.decode(slice), "utf8"),
      uniqueBytes:
        idx === 1
          ? Buffer.byteLength(enc.decode(slice), "utf8")
          : Buffer.byteLength(enc.decode(slice), "utf8") -
            Math.floor(
              (overlap / chunkSize) *
                Buffer.byteLength(enc.decode(slice), "utf8")
            ),
    };
    if (slice.length < chunkSize) break; // tail handled
  }
}
