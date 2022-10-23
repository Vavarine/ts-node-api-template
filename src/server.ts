import * as dotenv from "dotenv";
import express from "express";

import { logInfo } from "./utils/log";

dotenv.config();
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT ?? 3333, () => {
  logInfo("server", `running on port ${process.env.PORT ?? 3333}`);
});
