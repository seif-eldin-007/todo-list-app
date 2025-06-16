import connectToDatabase from "../../../lib/database.js";
import { withDevAuth } from "../../../lib/auth";

async function handler(request) {
  try {
    await connectToDatabase();

    return new Response("✅ Database connection successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    return new Response("❌ Failed to connect to MongoDB", { status: 500 });
  }
}

export const GET = withDevAuth(handler);
