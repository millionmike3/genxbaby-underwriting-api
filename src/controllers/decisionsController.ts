import { Request, Response } from "express";

export async function submitDecisionHandler(req: Request, res: Response) {
  try {
    const { applicationId, decision } = req.body;

    // placeholder: later you can write to contract or worker
    res.json({
      applicationId,
      decision,
      status: "accepted"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit decision" });
  }
}
