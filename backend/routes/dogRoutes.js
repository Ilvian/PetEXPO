import express from "express";
import { createDog } from "../controllers/dogController.js";

const dogRouter = express.Router();

dogRouter.post("/create_dog", createDog);

export default dogRouter;
