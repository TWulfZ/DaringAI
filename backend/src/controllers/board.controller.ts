import { Request, Response, NextFunction } from 'express';
import * as boardService from '@services/db/board.service';
import logger from '@managers/logger.manager';

export const createBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt } = req.body;
    if (!req.user) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    if (typeof prompt !== 'string') {
      return res.status(400).json({ error: 'El prompt debe ser una cadena de texto' });
    }
    logger.debug(prompt)
    const authorId = req.user.id;
    const board = await boardService.createBoard(prompt, authorId);
    res.status(201).json(board);
  } catch (error) {
    next(error);  
  }
};

// GET COMPLETE BOARDS FROM USER
export const getBoards = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorId = req.user!.id;
    const boards = await boardService.getBoards(authorId);
    res.json(boards);
  } catch (error) {
    next(error);
  }
};

export const getBoardById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const boardId = req.params.id;
    const board = await boardService.getBoardById(boardId);
    res.json(board);
  } catch (error) {
    next(error);
  }
}

export const getUserBoards = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorId = req.user!.id;
    const boards = await boardService.getUserBoards(authorId);
    res.json(boards);
  } catch (error) {
    next(error);
  }
};

export const getCardChallenge = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const challengeId = req.params.id;
    const card = await boardService.getCardChallenge(challengeId);
    res.json(card);
  } catch (error) {
    next(error);
  }
}

export const getCardExample = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exampleId = req.params.id;
    const card = await boardService.getCardExample(exampleId);
    res.json(card);
  } catch (error) {
    next(error);
  }
}

// TODO: getBoardById, updateBoard, deleteBoard