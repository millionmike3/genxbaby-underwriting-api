import dotenv from "dotenv";
dotenv.config();

export const AMOY_RPC_URL = process.env.AMOY_RPC_URL || "";
export const UNDERWRITING_CONTRACT_ADDRESS =
  process.env.UNDERWRITING_CONTRACT_ADDRESS || "";
export const UNDERWRITING_WORKER_URL =
  process.env.UNDERWRITING_WORKER_URL || "";
export const PORT = process.env.PORT || "3000";
