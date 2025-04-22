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
}
