import http from 'http'

import { createServer } from "./config/express.js";

const host = process.env.HOST || '0.0.0.0';
const port = process.env.HOST || '6969';

const startServer = async () => {
  const app = await createServer();

  http.createServer(app).listen({host, port}, () => {
    console.log(`Server ready on port::${port}!`);
  })
}

startServer()