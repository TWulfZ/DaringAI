
import prisma from '@config/db';
import { generateBoard } from '@managers/ia.manager';
import logger from '@managers/logger.manager';

export const createBoard = async (prompt: string, authorId: string) => {

  const board = await generateBoard(prompt);
  logger.info(authorId);
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

export const getBoards = async (authorId: string) => {
  return prisma.boards.findMany({
    where: { author_id: authorId },
    include: {
      cards_example: true,
      cards_challenge: true,
    },
  });
};