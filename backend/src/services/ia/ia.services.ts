import { createOpenAI } from "@ai-sdk/openai";
import logger from "@managers/logger.manager";

if (!process.env.GROQ_API_KEY) {
  logger.error("GROQ_API_KEY not found");
}

export const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});