import logger from "@managers/logger.manager";
import errorHandler from "@middlewares/error.handler";
import boardRoutes from "@routes/board.route";
import authRoutes from "@routes/auth.route";
import express from "express";
import dotenv from "dotenv";
import { authMiddleware } from "@middlewares/auth.middleware";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/api/boards', boardRoutes);
app.use('/api/auth', authRoutes);

// Manejador de errores
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
