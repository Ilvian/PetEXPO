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
      return res.status(400).json({ error: "Dog with this id already exists" });
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

    console.log("Dog created succesfully");
    res.status(201).json(newDog);
  } catch (error) {
    console.error("Error creating dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
