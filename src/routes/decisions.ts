import { Router } from "express";
import { submitDecisionHandler } from "../controllers/decisionsController.js";

const router = Router();

router.post("/", submitDecisionHandler);

export default router;
