import logger from "@managers/logger.manager";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  logger.info("Server started on port 3000");
})