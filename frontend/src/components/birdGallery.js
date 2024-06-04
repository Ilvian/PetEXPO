import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import Header from "./header";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Birds = () => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/birds/getAll"
        );
        setBirds(response.data);
      } catch (error) {
        console.error("Error fetching birds:", error);
      }
    };

    fetchBirds();
  }, []);

  return (
    <div>
      <Header />
      <h2>Birds Gallery</h2>
      <Grid container spacing={2}>
        {birds.map((bird) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={bird.id}>
            <Card>
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
                  <strong>Origin:</strong> {bird.origin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Birds;
