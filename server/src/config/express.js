import express from "express";

import { NoteRouter } from "../routers/notes/index.js";

const createServer = async () => {
  const app = express();

  app.use(NoteRouter)

  return app;
};

export { createServer };
