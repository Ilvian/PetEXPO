import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Header from "./header";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import DogModal from "./modals/dogModal";
import SearchBar from "./searchBar";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDog, setSelectedDog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dogs/getAll");
        setDogs(response.data);
      } catch (error) {
        setError("Error fetching dogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  const handleOpenModal = (dog) => {
    setSelectedDog(dog);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDog(null);
  };

  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h2>Dogs Gallery</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} label="Dogs" />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {filteredDogs.map((dog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dog.id}>
            <Card onClick={() => handleOpenModal(dog)}>
              <CardMedia
                component="img"
                height="200"
                image={dog.image}
                alt={dog.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {dog.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Origin:</strong> {dog.origin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <DogModal open={modalOpen} handleClose={handleCloseModal} dog={selectedDog} />
    </div>
  );
};

export default Dogs;
