import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import AnimalGallery from "./animals";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "95%",
          maxWidth: "1200px",
          minHeight: "90vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h3" gutterBottom>
            Welcome Admin!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        <Box flexGrow={1}>
          <AnimalGallery />
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminPage;
