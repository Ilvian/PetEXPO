import axios from "axios";

async function fetchBirds() {
  try {
    const { data } = await axios.get("https://freetestapi.com/api/v1/birds");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const getBirds = async () => {
  const allBirds = await fetchBirds();
  return allBirds;
};

export { getBirds };
