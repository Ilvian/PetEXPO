import mongoose from "mongoose";

const bird = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  species: String,
  family: String,
  habitat: String,
  place_of_found: String,
  diet: String,
  description: String,
  weight_kg: Number,
  height_cm: Number,
  image: String,
});

const Bird = mongoose.model("Bird", bird);

export default Bird;
