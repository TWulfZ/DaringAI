import { generateBoard } from "@managers/ia.manager";
import logger from "@managers/logger.manager";
import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

///// TESTS //////
logger.info(await generateBoard('Puedes explicarme como funciona los hooks de React?'))
//////////////////

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/generate', async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Se requiere un prompt válido' });
    }

    const response = await generateBoard(prompt);
    res.json({ response });
  } catch (error) {
    logger.error('Error al generar respuesta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  logger.info(`Servidor escuchando en http://localhost:${port}`);
});
