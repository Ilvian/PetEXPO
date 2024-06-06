import React, { useState } from "react";
import { Modal, Button, Box, Typography, TextField } from "@mui/material";
import axios from "../../axiosConfig";

const CreateAnimalModal = ({ open, handleClose }) => {
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    console.log("Selected category:", selectedCategory);
    setCategory(event.target.value);
    setFormData({});
  };

  const handleInputChange = (event) => {
    console.log("Form Data:", {
      ...formData,
      [event.target.name]: event.target.value,
    });
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCreate = async () => {
    try {
      console.log("category", category);

      console.log("formData", formData);

      const response = await axios.get(
        `http://localhost:5000/api/${category}s/getAll`
      );
      const animals = response.data;

      const animalIds = animals.map((animal) => animal.id);

      const maxId = Math.max(...animalIds);

      const newId = maxId + 1;

      const newData = { ...formData, id: newId };
      console.log("New data with ID:", newData);

      const createResponse = await axios.post(
        `http://localhost:5000/api/${category}s/create`,
        newData
      );
      console.log("Created animal:", createResponse.data);
      setFormData({});
      handleClose();
      //   window.location.reload();
    } catch (error) {
      console.error("Error creating animal:", error);
      setError("Error creating animal. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Create New Animal
        </Typography>
        <select
          value={category}
          onChange={handleCategoryChange}
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
          }}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>

        {category === "dog" && (
          <div>
            <TextField
              name="name"
              label="Name"
              value={formData.name || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="breed_group"
              label="Breed Group"
              value={formData.breed_group || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="size"
              label="Size"
              value={formData.size || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="lifespan"
              label="Lifespan"
              value={formData.lifespan || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="origin"
              label="Origin"
              value={formData.origin || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="temperament"
              label="Temperament"
              value={formData.temperament || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="colors"
              label="Colors"
              value={formData.colors || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="image"
              label="Image URL"
              value={formData.image || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </div>
        )}
        {category === "cat" && (
          <div>
            <TextField
              name="name"
              label="Name"
              value={formData.name || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="origin"
              label="Origin"
              value={formData.origin || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="temperament"
              label="Temperament"
              value={formData.temperament || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="colors"
              label="Colors"
              value={formData.colors || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="image"
              label="Image URL"
              value={formData.image || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </div>
        )}
        {category === "bird" && (
          <div>
            <TextField
              name="name"
              label="Name"
              value={formData.name || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="species"
              label="Species"
              value={formData.species || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="family"
              label="Family"
              value={formData.family || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="habitat"
              label="Habitat"
              value={formData.habitat || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="place_of_found"
              label="Place of Found"
              value={formData.place_of_found || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="diet"
              label="Diet"
              value={formData.diet || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="weight_kg"
              label="Weight (kg)"
              value={formData.weight_kg || ""}
              onChange={handleInputChange}
              type="number"
              fullWidth
              margin="normal"
            />
            <TextField
              name="wingspan_cm"
              label="Wingspan (cm)"
              value={formData.wingspan_cm || ""}
              onChange={handleInputChange}
              type="number"
              fullWidth
              margin="normal"
            />
            <TextField
              name="image"
              label="Image URL"
              value={formData.image || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </div>
        )}
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Modal>
  );
};

export default CreateAnimalModal;
