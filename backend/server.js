import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import connectDB from "./models/database.js";
import dogRouter from "./routes/dogRoutes.js";
import catRouter from "./routes/catRoutes.js";
import birdRouter from "./routes/birdRoutes.js";

dotenv.config({ path: path.resolve("../.env") });
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/dogs", dogRouter);
app.use("/api/cats", catRouter);
app.use("/api/Birds", birdRouter);

connectDB();
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
