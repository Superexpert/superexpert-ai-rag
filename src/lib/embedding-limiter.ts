// import Bottleneck from "bottleneck";


// // 90 000 TPM & 1 000 RPM is Tier-1 for embeddings; adjust to YOUR tier
// const TPM = 90000;
// const RPM = 1000;

// const limiter = new Bottleneck({
//   maxConcurrent: 2,       // never run more than 2 HTTP calls simultaneously
//   minTime: 1000 / RPM,    // milliseconds between calls (enforces RPM)
//   reservoir: TPM,         // tokens left in this minute
//   reservoirRefreshAmount: TPM,
//   reservoirRefreshInterval: 60 * 1000
// });

// export function getEmbeddingLimited(
//   text: string,
//   tokenCount: number           // <-- ❶ reuse, don't recalc
// ) {
//   return limiter.schedule({ weight: tokenCount }, () =>
//     embeddingAdapter.getEmbedding(text)
//   );
// }