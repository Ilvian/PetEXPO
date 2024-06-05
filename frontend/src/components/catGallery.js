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
import CatModal from "./modals/catModal";
import SearchBar from "./searchBar";

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cats/getAll");
        setCats(response.data);
      } catch (error) {
        setError("Error fetching cats. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const handleOpenModal = (cat) => {
    setSelectedCat(cat);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCat(null);
  };

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h2>Cats Gallery</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} label="Cats" />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {filteredCats.map((cat) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={cat.id}>
            <Card onClick={() => handleOpenModal(cat)}>
              <CardMedia
                component="img"
                height="200"
                image={cat.image}
                alt={cat.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cat.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>Origin:</strong> {cat.origin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CatModal open={modalOpen} handleClose={handleCloseModal} cat={selectedCat} />
    </div>
  );
};

export default Cats;
