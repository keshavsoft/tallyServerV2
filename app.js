import { exec } from "child_process";

import express from "express";

import { router as routerFromapi } from './api/routes.js';

import loadConfig from "./configLoader.js";
import setupRoutes from "./routes.js";
import startServer from "./server.js";

loadConfig();

const app = express()

app.use('/api', routerFromapi);

setupRoutes(app);

const { port } = startServer(app);

if (process.env.OPEN_BROWSER === "true") {
    exec(`start http://localhost:${port}`);
};
