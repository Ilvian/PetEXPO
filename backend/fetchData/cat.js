import axios from "axios";

async function fetchCats() {
  try {
    const { data } = await axios.get("https://freetestapi.com/api/v1/cats");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const getCats = async () => {
  const allCats = await fetchCats();
  return allCats;
};

export { getCats };
