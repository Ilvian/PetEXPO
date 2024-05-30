import Dog from "./models/dogs.js";
import { getDogs } from "./fetchData/dog.js";
import connectDB from "./models/database.js";

connectDB();

const importData = async () => {
  try {
    const dogs = await getDogs();
    await Dog.insertMany(dogs);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();
