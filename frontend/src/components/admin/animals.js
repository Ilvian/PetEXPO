import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Alert,
  TextField,
  Button,
} from "@mui/material";
import axios from "../../axiosConfig";
import UpdateAnimalModal from "./updateAnimal";
import CreateAnimalModal from "./createAnimal"

const AnimalGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const [dogsResponse, catsResponse, birdsResponse] = await Promise.all([
        axios.get("http://localhost:5000/api/dogs/getAll"),
        axios.get("http://localhost:5000/api/cats/getAll"),
        axios.get("http://localhost:5000/api/birds/getAll"),
      ]);

      setDogs(dogsResponse.data.map((dog) => ({ ...dog, type: "dog" })));
      setCats(catsResponse.data.map((cat) => ({ ...cat, type: "cat" })));
      setBirds(birdsResponse.data.map((bird) => ({ ...bird, type: "bird" })));
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

  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleUpdateAnimal = async (updatedAnimal) => {
    try {
      let response;
      if (selectedAnimal.type === "dog") {
        response = await axios.put(
          `http://localhost:5000/api/dogs/update/${selectedAnimal.id}`,
          updatedAnimal
        );
      } else if (selectedAnimal.type === "cat") {
        response = await axios.put(
          `http://localhost:5000/api/cats/update/${selectedAnimal.id}`,
          updatedAnimal
        );
      } else if (selectedAnimal.type === "bird") {
        response = await axios.put(
          `http://localhost:5000/api/birds/update/${selectedAnimal.id}`,
          updatedAnimal
        );
      }

      if (response) {
        const updatedAnimalList =
          selectedAnimal.type === "dog"
            ? dogs.map((dog) =>
                dog.id === selectedAnimal.id ? response.data : dog
              )
            : selectedAnimal.type === "cat"
            ? cats.map((cat) =>
                cat.id === selectedAnimal.id ? response.data : cat
              )
            : birds.map((bird) =>
                bird.id === selectedAnimal.id ? response.data : bird
              );

        selectedAnimal.type === "dog"
          ? setDogs(updatedAnimalList)
          : selectedAnimal.type === "cat"
          ? setCats(updatedAnimalList)
          : setBirds(updatedAnimalList);
      }

      handleCloseUpdateModal();
      window.location.reload();
    } catch (error) {
      console.error("Error updating animal", error);
    }
  };

  const handleDeleteAnimal = async (animalId, animalType) => {
    try {
      console.log(`Deleting ${animalType} with ID: ${animalId}`);

      await axios.delete(
        `http://localhost:5000/api/${animalType}s/delete/${animalId}`
      );
      if (animalType === "dog") {
        setDogs(dogs.filter((dog) => dog.id !== animalId));
      } else if (animalType === "cat") {
        setCats(cats.filter((cat) => cat.id !== animalId));
      } else if (animalType === "bird") {
        setBirds(birds.filter((bird) => bird.id !== animalId));
      }
    } catch (error) {
      console.error(`Error deleting ${animalType}`, error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterAnimals = (animals) => {
    return animals.filter((animal) =>
      animal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>
      <TextField
        label="Search by name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchChange}
      />

<Button variant="contained" color="primary" onClick={handleOpenCreateModal}>
        Create Animal
      </Button>

      <CreateAnimalModal open={createModalOpen} handleClose={handleCloseCreateModal} />


      <Typography variant="h3" gutterBottom>
        Dogs Gallery
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2}>
        {filterAnimals(dogs).map((dog) => (
          <Grid item key={dog.id}>
            <div>
              <img
                src={dog.image}
                alt={dog.name}
                style={{ width: "250px", height: "250px" }}
                onClick={() => handleOpenUpdateModal(dog)}
              />
              <Typography>{dog.name}</Typography>
              <Typography>Origin: {dog.origin}</Typography>
              <Button onClick={() => handleDeleteAnimal(dog.id, "dog")}>
                Delete
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" gutterBottom>
        Cats Gallery
      </Typography>
      <Grid container spacing={2}>
        {filterAnimals(cats).map((cat) => (
          <Grid item key={cat.id}>
            <div>
              <img
                src={cat.image}
                alt={cat.name}
                style={{ width: "250px", height: "250px" }}
                onClick={() => handleOpenUpdateModal(cat)}
              />
              <Typography>{cat.name}</Typography>
              <Typography>Origin: {cat.origin}</Typography>
              <Button onClick={() => handleDeleteAnimal(cat.id, "cat")}>
                Delete
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" gutterBottom>
        Birds Gallery
      </Typography>
      <Grid container spacing={2}>
        {filterAnimals(birds).map((bird) => (
          <Grid item key={bird.id}>
          <div>
            <img
              src={bird.image}
              alt={bird.name}
              style={{ width: "250px", height: "250px" }}
              onClick={() => handleOpenUpdateModal(bird)}
            />
            <Typography>{bird.name}</Typography>
            <Typography>Species: {bird.species}</Typography>
            <Button onClick={() => handleDeleteAnimal(bird.id, "bird")}>
              Delete
            </Button>
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
