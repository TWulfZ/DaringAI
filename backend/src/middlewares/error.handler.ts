import logger from '@managers/logger.manager';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Ocurrio un error!' });
};

export default errorHandler;