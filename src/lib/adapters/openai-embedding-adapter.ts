import Bottleneck from "bottleneck";
import { criticalError, success } from "../console-messages";

export interface RateLimitOpts {
  tokensPerMinute?:   number;  // TPM   – OpenAI’s token quota for this model
  requestsPerMinute?: number;  // RPM   – request quota for this endpoint
  maxConcurrent?:     number;  // in-flight HTTP calls
}

export class OpenAIEmbeddingAdapter {
  /* ─── internal limiters ──────────────────────────────────────── */
  private readonly tokenLimiter:        Bottleneck;
  private readonly concurrencyLimiter:  Bottleneck;

  constructor(
    private readonly apiKey: string,
    {
      tokensPerMinute   = 90_000,
      requestsPerMinute = 1_000,
      maxConcurrent     = 2,
    }: RateLimitOpts = {}
  ) {
    /* 1️⃣ token budget gate (TPM) */
    this.tokenLimiter = new Bottleneck({
      reservoir:                 tokensPerMinute,
      reservoirRefreshAmount:    tokensPerMinute,
      reservoirRefreshInterval:  60_000,          // 1 minute
      /* no maxConcurrent here */
    });

    /* 2️⃣ parallelism / RPM gate */
    this.concurrencyLimiter = new Bottleneck({
      maxConcurrent,
      minTime: 1_000 / requestsPerMinute,         // smooth requests
    });

  }

  /* ─── helper (unchanged) ────────────────────────────────────── */
   public async verifyAPIKey() {
    try {
      const resp = await fetch("https://api.openai.com/v1/models", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        success("API key is valid.");
        return true;
      }
      const { error } = await resp.json();
      criticalError("API key is invalid:", error.message);
    } catch (err) {
      criticalError("Network or other error:", (err as Error).message);
    }
    return false;
  }


  /* ─── main API call (rate-limited) ───────────────────────────── */
  public async getEmbedding(input: string, tokenCount: number) {
    // 1️⃣ debit tokens-per-minute
    return this.tokenLimiter.schedule({ weight: tokenCount }, () =>
      // 2️⃣ *inside* that, guard concurrency / RPM
      this.concurrencyLimiter.schedule(async () => {
        const resp = await fetch("https://api.openai.com/v1/embeddings", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "text-embedding-3-small",
            input,
          }),
        });
  
        if (!resp.ok) {
          const { error } = await resp.json();
          criticalError("Error fetching embedding:", error.message);
          throw new Error(error.message);
        }
        const { data } = await resp.json();
        return data[0].embedding as number[];
      })
    );
  }

}
