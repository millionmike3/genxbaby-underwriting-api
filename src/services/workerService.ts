import axios from "axios";
import { UNDERWRITING_WORKER_URL } from "../config/env.js";

export async function runUnderwritingJob(applicationId: string) {
  if (!UNDERWRITING_WORKER_URL) {
    throw new Error("UNDERWRITING_WORKER_URL not set");
  }

  const response = await axios.post(`${UNDERWRITING_WORKER_URL}/run`, {
    applicationId
  });

  return response.data;
}
