import { ethers } from "ethers";
import { AMOY_RPC_URL, UNDERWRITING_CONTRACT_ADDRESS } from "../config/env.js";
import abiJson from "./UnderwritingAnchor.abi.json" assert { type: "json" };

export function getUnderwritingContract() {
  const provider = new ethers.JsonRpcProvider(AMOY_RPC_URL);
  return new ethers.Contract(
    UNDERWRITING_CONTRACT_ADDRESS,
    abiJson.abi,   // <-- FIXED: pass only the ABI array
    provider
  );
}
