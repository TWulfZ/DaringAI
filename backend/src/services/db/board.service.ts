
import prisma from '@config/db';
import { generateBoard } from '@managers/ia.manager';

export const createBoard = async (prompt: string, authorId: string) => {

  const board = await generateBoard(prompt);
  const { title, cardsChallenge, cardsExample } = board;

  return prisma.boards.create({
    data: {
      title: title,
      author_id: authorId,
      cards_challenge: {
        create: cardsChallenge.map((card) => ({
          title: card.title,
          content: card.content,
          language: card.language,
        })),
      },
      cards_example: {
        create: cardsExample.map((card) => ({
          title: card.title,
          content: card.content,
          language: card.language,
          code: card.code,
        })),
      }
    },
  });
};


export const getUserBoards = async (authorId: string) => {
  return prisma.boards.findMany({
    where: { author_id: authorId },
    include: {
      cards_challenge: false,
      cards_example: false,
    },
  });
};

export const getBoardById = async (boardId: string) => {
  return prisma.boards.findUnique({
    where: { board_id: boardId },
    include: {
      cards_challenge: true,
      cards_example: true,
    },
  })
}

// GET COMPLETE BOARDS FROM USER
export const getBoards = async (authorId: string) => {
  return prisma.boards.findMany({
    where: { author_id: authorId },
    include: {
      cards_example: true,
      cards_challenge: true,
    },
  });
};

// CARDS
export const getCardChallenge = async (challengeId: string) => {
  return prisma.cards_challenge.findUnique({
    where: { challenge_id: challengeId },
  });
}

export const getCardExample = async (exampleId: string) => {
  return prisma.cards_example.findUnique({
    where: { example_id: exampleId },
  })
}
