import mongoose from "mongoose";
import env from "@/config/env";

if (!env.MONGO_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectToDatabase;
