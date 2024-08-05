const boards: BoardData[] = [
  {
    id: "nestjs-basics",
    title: "¿Cómo usar NestJS?",
    cardsExample: [
      {
        id: "nestjs-setup",
        title: "¿Cómo configurar un proyecto con NestJS?",
        content:
          "NestJS es un framework para construir aplicaciones del lado del servidor en Node.js. Para configurar un proyecto, puedes usar el siguiente comando en la terminal:",
        language: "bash",
        code: "npx @nestjs/cli new my-nest-app",
      },
      {
        id: "nestjs-controllers",
        title: "¿Cómo crear un controlador en NestJS?",
        content:
          "Los controladores en NestJS se utilizan para manejar las rutas y las solicitudes HTTP. Puedes crear un controlador con el siguiente código:",
        language: "typescript",
        code: "import { Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n @Get()\n findAll(): string {\n  return 'This action returns all cats';\n }\n}",
      },
      {
        id: "nestjs-services",
        title: "¿Cómo crear un servicio en NestJS?",
        content:
          "Los servicios en NestJS son la lógica de negocio que puede ser inyectada en los controladores. Un ejemplo de cómo crear un servicio:",
        language: "typescript",
        code: "import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService {\n getCats(): string[] {\n  return ['Tabby', 'Persian', 'Siamese'];\n }\n}",
      },
    ],
    cardsChallenge: [
      {
        id: "nestjs-setup-challenge",
        title: "Configuración de NestJS Challenge",
        content:
          "Crea un nuevo proyecto en NestJS y configúralo con un módulo, un controlador y un servicio básico.",
        language: "bash",
      },
      {
        id: "nestjs-controller-challenge",
        title: "Controller en NestJS Challenge",
        content:
          "Crea un controlador en NestJS que maneje una ruta personalizada y devuelva un objeto JSON.",
        language: "typescript",
      },
      {
        id: "nestjs-service-challenge",
        title: "Servicio en NestJS Challenge",
        content:
          "Crea un servicio en NestJS que gestione una lista de objetos y permita agregar, eliminar y consultar los elementos.",
        language: "typescript",
      },
    ],
  },
];

import jsons from "./test.json";
const jsonString = JSON.stringify(jsons);
const jsonParsed = JSON.parse(jsonString)
boards.push(jsonParsed)

export const getBoard = (id: string | undefined): BoardData | undefined => {
  return boards.find((board) => board.id === id);
};

export const getCardExample = (
  boardId: string,
  cardId: string,
): CardDataExample | undefined => {
  const board = getBoard(boardId);
  return board?.cardsExample.find((card) => card.id === cardId);
};

export const getCardChallenge = (
  boardId: string,
  cardId: string,
): CardDataChallenge | undefined => {
  const board = getBoard(boardId);
  return board?.cardsChallenge.find((card) => card.id === cardId);
};
