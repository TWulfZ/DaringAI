import { BoardSchema } from "schemas/ai.schema";
import { groq } from "@services/ia/ia.services";
import { generateObject, jsonSchema } from "ai";
import endent from "endent";

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

const system = `Crea un plan de estudio de programacion en base el formato JSON. (debes generar 3 cards o mas si no hay suficientes), en "language" pon la extension del lenguaje del codigo que vas a utilizar.`;

export async function generateBoard(prompt: string): Promise<BoardSchema> {
  const { object: data}= await generateObject({
    model: groq("llama-3.1-70b-versatile"),
    system: system,
    prompt: `${prompt}`,
    temperature: 0.1,
    maxTokens: 2048,
    schema: boardSchema,
  });

  return data as BoardSchema;
}

