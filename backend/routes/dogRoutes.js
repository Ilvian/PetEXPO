import express from "express";
import {
  createDog,
  getAllDogs,
  getDog,
  getXDogs,
  getDogNames,
  getDogByName,
  sortByName,
  updateDogById,
  deleteDogById,
} from "../controllers/dogController.js";

const dogRouter = express.Router();

dogRouter.post("/create", createDog);
dogRouter.get("/getAll", getAllDogs);
dogRouter.get("/get/:id", getDog);
dogRouter.get("/getX", getXDogs);
dogRouter.get("/getNames", getDogNames);
dogRouter.get("/getByName", getDogByName);
dogRouter.get("/sort", sortByName);
dogRouter.put("/update/:id", updateDogById);
dogRouter.delete("/delete/:id", deleteDogById);

export default dogRouter;
