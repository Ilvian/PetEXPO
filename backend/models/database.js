import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
