import { Router } from "express";
import { getApplicationHandler } from "../controllers/applicationsController.js";

const router = Router();

router.get("/:id", getApplicationHandler);

export default router;
