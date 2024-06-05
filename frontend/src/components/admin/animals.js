import React, { useState, useEffect } from "react";
import { Grid, Typography, CircularProgress, Alert, Button } from "@mui/material";
import axios from "../../axiosConfig";
import UpdateAnimalModal from "./updateAnimal";

const AnimalGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const dogsResponse = await axios.get("http://localhost:5000/api/dogs/getAll");
      const catsResponse = await axios.get("http://localhost:5000/api/cats/getAll");
      const birdsResponse = await axios.get("http://localhost:5000/api/birds/getAll");

      setDogs(dogsResponse.data.map(dog => ({ ...dog, type: "dog" })));
      setCats(catsResponse.data.map(cat => ({ ...cat, type: "cat" })));
      setBirds(birdsResponse.data.map(bird => ({ ...bird, type: "bird" })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching animals", error);
      setError("Error fetching animals. Please try again later.");
      setLoading(false);
    }
  };

  const handleOpenUpdateModal = (animal) => {
    setSelectedAnimal(animal);
    setUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setSelectedAnimal(null);
    setUpdateModalOpen(false);
  };

  const handleUpdateAnimal = async (updatedAnimal) => {
    try {
      let response;
      if (selectedAnimal.type === "dog") {
        response = await axios.put(`http://localhost:5000/api/dogs/update/${selectedAnimal.id}`, updatedAnimal);
      } else if (selectedAnimal.type === "cat") {
        response = await axios.put(`http://localhost:5000/api/cats/update/${selectedAnimal.id}`, updatedAnimal);
      } else if (selectedAnimal.type === "bird") {
        response = await axios.put(`http://localhost:5000/api/birds/update/${selectedAnimal.id}`, updatedAnimal);
      }

      if (response) {
        const updatedAnimalList = selectedAnimal.type === "dog"
          ? dogs.map(dog => dog.id === selectedAnimal.id ? response.data : dog)
          : selectedAnimal.type === "cat"
            ? cats.map(cat => cat.id === selectedAnimal.id ? response.data : cat)
            : birds.map(bird => bird.id === selectedAnimal.id ? response.data : bird);

        selectedAnimal.type === "dog" ? setDogs(updatedAnimalList)
          : selectedAnimal.type === "cat" ? setCats(updatedAnimalList)
          : setBirds(updatedAnimalList);
      }

      handleCloseUpdateModal();
      window.location.reload();

    } catch (error) {
      console.error("Error updating animal", error);
    }
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Dogs Gallery
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2}>
        {dogs.map((dog) => (
          <Grid item key={dog.id}>
            <div onClick={() => handleOpenUpdateModal(dog)}>
              <img src={dog.image} alt={dog.name} style={{ width: "80px", height: "80px" }} />
              <Typography>{dog.name}</Typography>
              <Typography>Origin: {dog.origin}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" gutterBottom>
        Cats Gallery
      </Typography>
      <Grid container spacing={2}>
        {cats.map((cat) => (
          <Grid item key={cat.id}>
            <div onClick={() => handleOpenUpdateModal(cat)}>
              <img src={cat.image} alt={cat.name} style={{ width: "80px", height: "80px" }} />
              <Typography>{cat.name}</Typography>
              <Typography>Origin: {cat.origin}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" gutterBottom>
        Birds Gallery
      </Typography>
      <Grid container spacing={2}>
        {birds.map((bird) => (
          <Grid item key={bird.id}>
            <div onClick={() => handleOpenUpdateModal(bird)}>
              <img src={bird.image} alt={bird.name} style={{ width: "80px", height: "80px" }} />
              <Typography>{bird.name}</Typography>
              <Typography>Species: {bird.species}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      <UpdateAnimalModal
        open={updateModalOpen}
        handleClose={handleCloseUpdateModal}
        animal={selectedAnimal}
        handleUpdateAnimal={handleUpdateAnimal}
      />
    </div>
  );
};

export default AnimalGallery;
