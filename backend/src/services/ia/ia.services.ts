import { createOpenAI } from "@ai-sdk/openai";
import logger from "@managers/logger.manager";
import { generateObject, jsonSchema } from "ai";
import endent from "endent";

if (!process.env.GROQ_API_KEY) {
  logger.error("GROQ_API_KEY not found");
}

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

type BoardSchema = {
  title: string;
  cardsExample: {
    title: string;
    content: string;
    language: string;
    code: string;
  }[];
  cardsChallenge: {
    id: string;
    title: string;
    content: string;
    language: string;
  }[];
};

const boardSchema = jsonSchema<BoardSchema>({
  type: "object",
  properties: {
    title: { type: "string" },
    cardsExample: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          content: { type: "string" },
          language: { type: "string" },
          code: { type: "string" },
        },
        required: ["title", "content", "language", "code"],
      },
    },
    cardsChallenge: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          content: { type: "string" },
          language: { type: "string" },
        },
        required: ["title", "content", "language"],
      },
    },
  },
  required: ["title", "cardsExample", "cardsChallenge"],
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const system = endent`
Eres una IA para generar planes de estudio de programación.
En "title" utiliza el prompt que use el usuario y en base a eso crea el plan de estudio. Siguiendo esta estructura de ejemplo
(debes generar 3 cards en cada array de cards, genera mas cards si crees que son necesarias)
En "language" debes especificar el lenguaje de programación como : "typescript" | "java" | "python" ...
En "code" debes escribir codigo con saltos de linea si es necesario como este: "import { Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n @Get()\n findAll(): string {\n  return 'This action returns all cats';\n }\n"
`;

export async function genBoard(prompt: string): Promise<BoardSchema> {
  const { object: data } = await generateObject({
    model: groq("llama-3.1-70b-versatile"),
    system: system,
    prompt: prompt,
    temperature: 0,
    maxTokens: 2048,
    schema: boardSchema,
  });

  return data;
}
