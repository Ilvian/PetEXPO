import Bird from "../models/birds.js";

export async function createBird(req, res) {
  try {
    const {
      id,
      name,
      species,
      family,
      habitat,
      place_of_found,
      diet,
      description,
      weight_kg,
      height_cm,
      image
    } = req.body;

    const existingBird = await Bird.findOne({ id });
    if (existingBird) {
      return res
        .status(400)
        .json({ error: `Bird with id ${id} already exists` });
    }

    const newBird = await Bird.create({
        id,
        name,
        species,
        family,
        habitat,
        place_of_found,
        diet,
        description,
        weight_kg,
        height_cm,
        image
    });

    res.status(201).json(newBird);
  } catch (error) {
    console.error("Error creating bird:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getAllBirds(req, res) {
  try {
    const birds = await Bird.find();
    if (birds.length === 0) {
      return res.status(404).json({ message: "Bird EXPO is empty" });
    }
    res.status(200).json(birds);
  } catch (error) {
    console.error("Error fetching birds:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getBird(req, res) {
  try {
    const { id } = req.params;
    const bird = await Bird.findOne({ id });
    if (!bird) {
      return res.status(404).json({ message: `Bird with id ${id} not found` });
    }
    res.status(200).json(bird);
  } catch (error) {
    console.error("Error fetching bird:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getXBirds(req, res) {
  try {
    let { limit } = req.query;
    limit = parseInt(limit);
    if (!limit || isNaN(limit) || limit <= 0) {
      return res.status(400).json({ message: "Invalid limit parameter" });
    }
    const birds = await Bird.find().limit(limit);
    if (birds.length === 0) {
      return res.status(404).json({ message: "No birds found" });
    }
    res.status(200).json(birds);
  } catch (error) {
    console.error("Error fetching birds:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getBirdNames(req, res) {
  try {
    const birds = await Bird.find({}, "name");

    if (birds.length === 0) {
      return res.status(404).json({ message: "Bird EXPO is empty" });
    }
    console.log("birds: ", birds);
    const birdNames = birds.map((bird) => bird.name);

    res.status(200).json(birdNames);
  } catch (error) {
    console.error("Error fetching birds:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getBirdByName(req, res) {
  try {
    const { selectName } = req.query;

    if (!selectName) {
      return res.status(400).json({ message: "Name required" });
    }
    const bird = await Bird.findOne({ name: selectName });

    if (!bird) {
      return res.status(404).json({ message: `${selectName} not found` });
    }

    res.status(200).json(bird);
  } catch (error) {
    console.error("Error fetching bird:", error);
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
    const birds = await Bird.find().sort({ name: order });
    res.status(200).json(birds);
  } catch (error) {
    console.error("Error fetching birds:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateBirdById(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "Update data is required" });
    }

    const updatedBird = await Bird.findOneAndUpdate({ id }, updateData, {
      new: true,
    });

    if (!updatedBird) {
      return res.status(404).json({ message: `Bird with ID ${id} not found` });
    }

    res.status(200).json(updatedDog);
  } catch (error) {
    console.error("Error updating bird:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteBirdById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID required" });
    }

    const deletedBird = await Bird.findOneAndDelete({ id });
    if (!deletedBird) {
      return res.status(404).json({ message: "Bird not found" });
    }

    res.status(200).json({ message: "Bird deleted", deletedBird });
  } catch (error) {
    console.error("Error deleting bird:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
