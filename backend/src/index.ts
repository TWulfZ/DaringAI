import logger from "@managers/logger.manager";
import errorHandler from "@middlewares/error.handler";
import boardRoutes from "@routes/board.route";
import authRoutes from "@routes/auth.route";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ORIGIN_CORS = process.env.ORIGIN_CORS || "https://daringai.vercel.app";

app.use(express.json());
app.use(cors({
  origin: ORIGIN_CORS,
}))

// Rutas
app.use('/api/boards', boardRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// Manejador de errores
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
