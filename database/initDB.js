import "dotenv/config";
import mongoose from "mongoose";

export default async function initDB() {
  return mongoose.connect(
    `mongodb+srv://app:${process.env.MONGO_SECRET}@${process.env.MONGO_CLUSTER}/database?retryWrites=true&w=majority`
  );
}
