import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Header from "./header";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/cats/getAll"
        );
        setCats(response.data);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      <Header />
      <h2>Cats Gallery</h2>
      <Grid container spacing={2}>
        {cats.map((cat) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={cat.id}>
            <Card>
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
    </div>
  );
};

export default Cats;
