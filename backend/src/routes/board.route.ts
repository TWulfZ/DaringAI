import { Router } from 'express';
import { createBoard, getBoards, getUserBoards, getCardChallenge, getBoardById, getCardExample } from '@controllers/board.controller';
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.post('/generate', createBoard);
router.get('/history', getUserBoards);
router.get('/:id', getBoardById)
router.get('/challenge/:id', getCardChallenge);
router.get('/example/:id', getCardExample);

// GET ALL INFO ABOUT BOARDS
router.get('/', getBoards);

export default router;
