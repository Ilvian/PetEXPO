import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Header from "./header";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

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
      <Grid container spacing={2}>
        {dogs.map((dog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dog.id}>
            <Card>
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
    </div>
  );
};

export default Dogs;
