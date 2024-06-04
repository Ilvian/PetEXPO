import Cat from "./models/cats.js";
import Dog from "./models/dogs.js";
import Bird from "./models/birds.js";
import { getCats } from "./fetchData/cat.js";
import { getDogs } from "./fetchData/dog.js";
import { getBirds } from "./fetchData/bird.js";
import connectDB from "./models/database.js";

connectDB();

const importData = async () => {
  try {
    const cats = await getCats();
    const dogs = await getDogs();
    const birds = await getBirds();

    await Cat.insertMany(cats);
    await Dog.insertMany(dogs);
    await Bird.insertMany(birds);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();

// import Dog from "./models/dogs.js";
// import { getDogs } from "./fetchData/dog.js";
// import connectDB from "./models/database.js";

// connectDB();

// const importData = async () => {
//   try {
//     const dogs = await getDogs();
//     await Dog.insertMany(dogs);

//     console.log("Data Imported!");
//     process.exit();
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     process.exit(1);
//   }
// };

// importData();
