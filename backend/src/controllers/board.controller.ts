import { Request, Response, NextFunction } from 'express';
import * as boardService from '@services/db/board.service';

export const createBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt } = req.body;
    if (!req.user) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    if (typeof prompt !== 'string') {
      return res.status(400).json({ error: 'El prompt debe ser una cadena de texto' });
    }
    const authorId = req.user.id; // Asumiendo que tienes el ID del usuario en req.user
    const board = await boardService.createBoard(prompt, authorId);
    res.status(201).json(board);
  } catch (error) {
    next(error);
  }
};

export const getBoards = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorId = req.user!.id;
    const boards = await boardService.getBoards(authorId);
    res.json(boards);
  } catch (error) {
    next(error);
  }
};

// TODO: getBoardById, updateBoard, deleteBoard