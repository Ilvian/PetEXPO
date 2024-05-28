import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import dogRouter from "./routes/dogRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/dogs", dogRouter);

connectDB();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
