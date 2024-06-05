import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Header from "./header";
import { CircularProgress, Alert, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import BirdModal from "./modals/birdModal";
import SearchBar from "./searchBar";

const Birds = () => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBird, setSelectedBird] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/birds/getAll");
        setBirds(response.data);
      } catch (error) {
        setError("Error fetching birds. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBirds();
  }, []);

  const handleOpenModal = (bird) => {
    setSelectedBird(bird);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedBird(null);
  };

  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h2>Birds Gallery</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} label="Birds" />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {filteredBirds.map((bird) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={bird.id}>
            <Card onClick={() => handleOpenModal(bird)}>
              <CardMedia
                component="img"
                height="200"
                image={bird.image}
                alt={bird.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bird.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Species:</strong> {bird.species}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <BirdModal open={modalOpen} handleClose={handleCloseModal} bird={selectedBird} />
    </div>
  );
};

export default Birds;
