import { criticalError, success } from "../console-messages";

export class OpenAIEmbeddingAdapter {
  constructor(private apiKey: string) {}

  public async verifyAPIKey() {
    try {
      const response = await fetch("https://api.openai.com/v1/models", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        success("API key is valid.");
        return true;
      } else {
        const errorData = await response.json();
        criticalError("API key is invalid:", errorData.error.message);
      }
    } catch (error) {
      criticalError("Network or other error:", (error as Error).message);
    }
  }

  public async getEmbedding(input: string) {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: input,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      criticalError("Error fetching embedding:", errorData.error.message);
    }
    const data = await response.json();
    return data.data[0].embedding;
  }
}
