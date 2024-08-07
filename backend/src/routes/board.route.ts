import { Router } from 'express';
import { createBoard, getBoards, /*getBoardById, updateBoard, deleteBoard*/ } from '@controllers/board.controller';
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.post('/', createBoard);
router.get('/', getBoards);
// router.get('/:id', getBoardById);
// router.put('/:id', updateBoard);
// router.delete('/:id', deleteBoard);

export default router;
