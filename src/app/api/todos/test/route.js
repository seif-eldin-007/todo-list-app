import { withDevAuth } from "@/lib/auth";
import env from "@/config/env";

async function handler() {
  return new Response("✅ Todos API is running in " + env.ENV + " mode");
}

export const GET = withDevAuth(handler);
