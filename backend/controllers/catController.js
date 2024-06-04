import Cat from "../models/cats.js";

export async function createCat(req, res) {
  try {
    const {
      id,
      name,
      origin,
      temperament,
      colors,
      description,
      image,
    } = req.body;

    const existingCat = await Cat.findOne({ id });
    if (existingCat) {
      return res
        .status(400)
        .json({ error: `Cat with id ${id} already exists` });
    }

    const newCat = await Cat.create({
      id,
      name,
      origin,
      temperament,
      colors,
      description,
      image,
    });

    res.status(201).json(newCat);
  } catch (error) {
    console.error("Error creating cat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getAllCats(req, res) {
  try {
    const cats = await Cat.find();
    if (cats.length === 0) {
      return res.status(404).json({ message: "Cat EXPO is empty" });
    }
    res.status(200).json(cats);
  } catch (error) {
    console.error("Error fetching cats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getCat(req, res) {
  try {
    const { id } = req.params;
    const cat = await Cat.findOne({ id });
    if (!cat) {
      return res.status(404).json({ message: `Cat with id ${id} not found` });
    }
    res.status(200).json(cat);
  } catch (error) {
    console.error("Error fetching cat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getXCats(req, res) {
  try {
    let { limit } = req.query;
    limit = parseInt(limit);
    if (!limit || isNaN(limit) || limit <= 0) {
      return res.status(400).json({ message: "Invalid limit parameter" });
    }
    const cats = await Cat.find().limit(limit);
    if (cats.length === 0) {
      return res.status(404).json({ message: "No cats found" });
    }
    res.status(200).json(cats);
  } catch (error) {
    console.error("Error fetching cats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getCatNames(req, res) {
  try {
    const cats = await Cat.find({}, "name");

    if (cats.length === 0) {
      return res.status(404).json({ message: "Cat EXPO is empty" });
    }
    console.log("cats: ", cats);
    const catNames = cats.map((cat) => cat.name);

    res.status(200).json(catNames);
  } catch (error) {
    console.error("Error fetching cats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getCatByName(req, res) {
  try {
    const { selectName } = req.query;

    if (!selectName) {
      return res.status(400).json({ message: "Name required" });
    }
    const cat = await Cat.findOne({ name: selectName });

    if (!cat) {
      return res.status(404).json({ message: `${selectName} not found` });
    }

    res.status(200).json(cat);
  } catch (error) {
    console.error("Error fetching cat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function sortByName(req, res) {
  try {
    const { order } = req.query;

    if (!order || (order !== "asc" && order !== "desc")) {
      return res.status(400).json({
        message: "Invalid or missing order parameter 'asc' or 'desc'.",
      });
    }
    const cats = await Cat.find().sort({ name: order });
    res.status(200).json(cats);
  } catch (error) {
    console.error("Error fetching cats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateCatById(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "Update data is required" });
    }

    const updatedCat = await Cat.findOneAndUpdate({ id }, updateData, {
      new: true,
    });

    if (!updatedCat) {
      return res.status(404).json({ message: `Cat with ID ${id} not found` });
    }

    res.status(200).json(updatedCat);
  } catch (error) {
    console.error("Error updating cat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteCatById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID required" });
    }

    const deletedCat = await Cat.findOneAndDelete({ id });
    if (!deletedCat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.status(200).json({ message: "Cat deleted", deletedCat });
  } catch (error) {
    console.error("Error deleting cat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
