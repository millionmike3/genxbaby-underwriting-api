import { Request, Response } from "express";
import { getApplicationFromContract } from "../services/contractService.js";
import { runUnderwritingJob } from "../services/workerService.js";

export async function getApplicationHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const [contractApp, workerResult] = await Promise.all([
      getApplicationFromContract(id),
      runUnderwritingJob(id)
    ]);

    res.json({
      applicationId: id,
      contract: contractApp,
      underwriting: workerResult
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch application" });
  }
}
