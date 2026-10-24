import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import applicationsRouter from "./routes/applications.js";
import decisionsRouter from "./routes/decisions.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "underwriting-api" });
});

app.use("/applications", applicationsRouter);
app.use("/decisions", decisionsRouter);

app.listen(PORT, () => {
  console.log(`Underwriting API listening on port ${PORT}`);
});
