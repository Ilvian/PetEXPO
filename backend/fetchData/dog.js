import axios from "axios";

async function fetchDogs() {
  try {
    const { data } = await axios.get("https://freetestapi.com/api/v1/dogs");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const getDogs = async () => {
  const allDogs = await fetchDogs();
  return allDogs;
};

export { getDogs };
