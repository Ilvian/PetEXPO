import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Header from "./header";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/dogs/getAll"
        );
        setDogs(response.data);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <div>
      <Header />
      <h2>Dogs Gallery</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <strong>Name:</strong> {dog.name} <br />
            <strong>Breed Group:</strong> {dog.breed_group} <br />
            <strong>Size:</strong> {dog.size} <br />
            <strong>Lifespan:</strong> {dog.lifespan} <br />
            <strong>Origin:</strong> {dog.origin} <br />
            <strong>Temperament:</strong> {dog.temperament} <br />
            <strong>Colors:</strong> {dog.colors.join(", ")} <br />
            <strong>Description:</strong> {dog.description} <br />
            <img
              src={dog.image}
              alt={dog.name}
              style={{ width: "200px", height: "auto" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dogs;
