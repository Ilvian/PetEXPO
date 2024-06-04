import express from "express";
import {
  createBird,
  getAllBirds,
  getBird,
  getXBirds,
  getBirdNames,
  getBirdByName,
  sortByName,
  updateBirdById,
  deleteBirdById
} from "../controllers/birdController.js";

const birdRouter = express.Router();

birdRouter.post("/create", createBird);
birdRouter.get("/getAll", getAllBirds);
birdRouter.get("/get/:id", getBird);
birdRouter.get("/getX", getXBirds);
birdRouter.get("/getNames", getBirdNames);
birdRouter.get("/getByName", getBirdByName);
birdRouter.get("/sort", sortByName);
birdRouter.put("/update/:id", updateBirdById);
birdRouter.delete("/delete/:id", deleteBirdById);

export default birdRouter;
