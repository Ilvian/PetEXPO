import express from "express";
import {
  createCat,
  getAllCats,
  getCat,
  getXCats,
  getCatNames,
  getCatByName,
  sortByName,
  updateCatById,
  deleteCatById
} from "../controllers/catController.js";

const catRouter = express.Router();

catRouter.post("/create", createCat);
catRouter.get("/getAll", getAllCats);
catRouter.get("/get/:id", getCat);
catRouter.get("/getX", getXCats);
catRouter.get("/getNames", getCatNames);
catRouter.get("/getByName", getCatByName);
catRouter.get("/sort", sortByName);
catRouter.put("/update/:id", updateCatById);
catRouter.delete("/delete/:id", deleteCatById);

export default catRouter;
