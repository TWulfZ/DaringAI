import { createOpenAI } from "@ai-sdk/openai";
import { openai } from "@ai-sdk/openai";
import logger from "@managers/logger.manager";
import { z } from "zod";
import { generateObject, jsonSchema, streamObject } from "ai";
import endent from "endent";

if (!process.env.GROQ_API_KEY) {
  logger.error("GROQ_API_KEY not found");
}

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const schema = {
  title: "Controladores en NestJS",
  cardsExample: [
    {
      title: "Creando un controlador en NestJS?",
      content:
        "Los controladores en NestJS se utilizan para manejar las rutas y las solicitudes HTTP. Puedes crear un controlador con el siguiente código:",
      language: "typescript",
      code: "import { Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n @Get()\n findAll(): string {\n  return 'This action returns all cats';\n }\n}",
    },
  ],
  cardsChallenge: [
    {
      title: "Controller en NestJS Challenge",
      content:
        "Crea un controlador en NestJS que maneje una ruta personalizada y devuelva un objeto JSON.",
      language: "typescript",
    },
  ],
};

const boardSchema = jsonSchema<{
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
}>({
  type: 'object',
  properties: {
    title: { type: 'string' },
    cardsExample: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          content: { type: 'string' },
          language: { type: 'string' },
          code: { type: 'string' },
        },
        required: ['title', 'content', 'language', 'code'],
      },
    },
    cardsChallenge: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          content: { type: 'string' },
          language: { type: 'string' },
        },
        required: ['title', 'content', 'language'],
      },
    },
  },
  required: ['title', 'cardsExample', 'cardsChallenge'],
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const system = endent`
Eres una IA para generar planes de estudio de programación.
En "title" utiliza el prompt que use el usuario y en base a eso crea el plan de estudio.
**Respondeme unicamente en formato .json** siguiendo esta estructura de ejemplo
(debes generar 3 cards en cada array de cards, si crees que son necesarias mas genera mas)
`

export async function genBoard(prompt: string) {
  const { object: data } = await generateObject({
    model: groq("llama-3.1-70b-versatile"),
    system: system,
    prompt: prompt,
    temperature: 0,
    maxTokens: 2048,
    schema: boardSchema
  });
  
  console.log(data);
  
}

export async function getRecipe(recipe_name: string) {
  // Pretty printing improves completion results.
  const jsonSchema = JSON.stringify(schema, null, 4);
  const chat_completion = await groq.chat.completions.create({
    messages: [
      {
        role: `Eres una IA para generar planes de estudio de programación.
        En "title" utiliza el prompt que use el usuario y en base a eso crea el plan de estudio.`,
        content: `Eres una IA para generar planes de estudio de programación. En "title" utiliza el prompt que use el usuario y en base a eso crea el plan de estudio. El plan de estudio debe ser en JSON y debe seguir el esquema: ${jsonSchema}.`,
      },
      {
        role: "user",
        content: `Fetch a recipe for ${recipe_name}`,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 0,
    stream: false,
    response_format: { type: "json_object" },
  });
  return Object.assign(JSON.parse(chat_completion.choices[0].message.content));
}

genBoard("Puedes enseñarme como hacer enemigos de LUA para roblox?")
