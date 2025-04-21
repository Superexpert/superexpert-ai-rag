import fs from 'node:fs';
import { TextDecoder } from 'node:util';
import { encodingForModel } from 'js-tiktoken';       

export interface Chunk {
  index: number;
  text: string;
  tokenCount: number;
  bytes: number;            // raw byte length (handy for progress bars)
}

/**
 * Asynchronous generator that yields Chunk objects.
 *
 * @param filePath      Absolute or relative path to the file on disk.
 * @param chunkSize     Desired chunk size (tokens). 50 – 8 192 enforced.
 * @param chunkOverlap  Overlap between consecutive chunks **in percent** (0 – 50).
 */
export async function* processFile(
  filePath: string,
  chunkSize: number,
  chunkOverlap: number,
): AsyncGenerator<Chunk> {
  if (chunkSize < 50 || chunkSize > 8192)
    throw new RangeError('chunkSize must be 50 – 8 192');
  if (chunkOverlap < 0 || chunkOverlap > 50)
    throw new RangeError('chunkOverlap must be 0 – 50%');

  const overlapTokens = Math.floor((chunkOverlap / 100) * chunkSize);
  const encoding = encodingForModel('text-embedding-3-small');        

  const decoder = new TextDecoder('utf-8');
  const stream = fs.createReadStream(filePath);                         
  let residualText = '';
  let idx = 0;
  let processedBytes = 0;

  for await (const chunk of stream) {
    residualText += decoder.decode(chunk, { stream: true });
    processedBytes += (chunk as Buffer).byteLength;

    let tokens = encoding.encode(residualText);                         
    while (tokens.length >= chunkSize) {
      const slice = tokens.slice(0, chunkSize);
      const text = encoding.decode(slice);

      yield {
        index: idx++,
        text,
        tokenCount: slice.length,
        bytes: Buffer.byteLength(text, 'utf-8'),
      };

      // keep the overlap
      residualText = encoding.decode(
        tokens.slice(chunkSize - overlapTokens),
      );
      tokens = encoding.encode(residualText);
    }
  }

  /* flush tail */
  const tailTokens = encoding.encode(residualText);
  if (tailTokens.length) {
    yield {
      index: idx,
      text: residualText,
      tokenCount: tailTokens.length,
      bytes: Buffer.byteLength(residualText, 'utf-8'),
    };
  }
}
