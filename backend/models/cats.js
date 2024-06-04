import mongoose from "mongoose";

const cat = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  origin: String,
  temperament: String,
  colors: [String],
  description: String,
  image: String,
});

const Cat = mongoose.model("Cat", cat);

export default Cat;
