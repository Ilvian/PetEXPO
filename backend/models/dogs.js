import mongoose from "mongoose";

const dog = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  breed_group: String,
  size: String,
  lifespan: String,
  origin: String,
  temperament: String,
  colors: [String],
  description: String,
  image: String,
});

const Dog = mongoose.model("Dog", dog);

export default Dog;
