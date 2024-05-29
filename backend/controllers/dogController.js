import Dog from "../models/dogs.js";

export async function createDog(req, res) {
  try {
    const {
      id,
      name,
      breed_group,
      size,
      lifespan,
      origin,
      temperament,
      colors,
      description,
      image,
    } = req.body;

    const existingDog = await Dog.findOne({ id });
    if (existingDog) {
      return res
        .status(400)
        .json({ error: `Dog with id ${id} already exists` });
    }

    const newDog = await Dog.create({
      id,
      name,
      breed_group,
      size,
      lifespan,
      origin,
      temperament,
      colors,
      description,
      image,
    });

    res.status(201).json(newDog);
  } catch (error) {
    console.error("Error creating dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getAllDogs(req, res) {
  try {
    const dogs = await Dog.find();
    if (dogs.length === 0) {
      return res.status(404).json({ message: "Dog EXPO is empty" });
    }
    res.status(200).json(dogs);
  } catch (error) {
    console.error("Error fetching dogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getDog(req, res) {
  try {
    const { id } = req.params;
    const dog = await Dog.findOne({ id });
    if (!dog) {
      return res.status(404).json({ message: `Dog with id ${id} not found` });
    }
    res.status(200).json(dog);
  } catch (error) {
    console.error("Error fetching dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getXDogs(req, res) {
  try {
    let { limit } = req.query;
    limit = parseInt(limit);
    if (!limit || isNaN(limit) || limit <= 0) {
      return res.status(400).json({ message: "Invalid limit parameter" });
    }
    const dogs = await Dog.find().limit(limit);
    if (dogs.length === 0) {
      return res.status(404).json({ message: "No dogs found" });
    }
    res.status(200).json(dogs);
  } catch (error) {
    console.error("Error fetching dogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getDogNames(req, res) {
  try {
    const dogs = await Dog.find({}, "name");

    if (dogs.length === 0) {
      return res.status(404).json({ message: "Dog EXPO is empty" });
    }
    console.log("dogs: ", dogs);
    const dogNames = dogs.map((dog) => dog.name);

    res.status(200).json(dogNames);
  } catch (error) {
    console.error("Error fetching dogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getDogByName(req, res) {
  try {
    const { selectName } = req.query;

    if (!selectName) {
      return res.status(400).json({ message: "Name required" });
    }
    const dog = await Dog.findOne({ name: selectName });

    if (!dog) {
      return res.status(404).json({ message: `${selectName} not found` });
    }

    res.status(200).json(dog);
  } catch (error) {
    console.error("Error fetching dog:", error);
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
    const dogs = await Dog.find().sort({ name: order });
    res.status(200).json(dogs);
  } catch (error) {
    console.error("Error fetching dogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateDogById(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "Update data is required" });
    }

    const updatedDog = await Dog.findOneAndUpdate({ id }, updateData, {
      new: true,
    });

    if (!updatedDog) {
      return res.status(404).json({ message: `Dog with ID ${id} not found` });
    }

    res.status(200).json(updatedDog);
  } catch (error) {
    console.error("Error updating dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteDogById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID required" });
    }

    const deletedDog = await Dog.findOneAndDelete({ id });
    if (!deletedDog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.status(200).json({ message: "Dog deleted", deletedDog });
  } catch (error) {
    console.error("Error deleting dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
