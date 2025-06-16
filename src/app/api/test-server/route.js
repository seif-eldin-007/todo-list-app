import env from "@/config/env";
import { withDevAuth } from "@/lib/auth";

async function handler(request) {
  return new Response(`✅ Server is running in ${env.ENV} mode`);
}

export const GET = withDevAuth(handler);
