import { getUnderwritingContract } from "../contracts/underwritingAnchor.js";

export async function getApplicationFromContract(applicationId: string) {
  const contract = getUnderwritingContract();
  // adjust to your actual contract interface
  const app = await contract.applications(applicationId);
  return app;
}
