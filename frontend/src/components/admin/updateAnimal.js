import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, DialogContent  } from "@mui/material";

const UpdateAnimalModal = ({ open, handleClose, animal, handleUpdateAnimal }) => {
  const [updatedAnimal, setUpdatedAnimal] = useState({ ...animal });

  useEffect(() => {
    if (animal) {
      setUpdatedAnimal({ ...animal });
    }
  }, [animal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAnimal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    handleUpdateAnimal(updatedAnimal);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <DialogContent dividers>
      <Box sx={style}>
        <h2>Update {animal && animal.name}</h2>
        <TextField
          label="Name"
          name="name"
          value={updatedAnimal.name || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {animal && animal.type === "dog" && (
          <>
            <TextField
              label="Breed Group"
              name="breed_group"
              value={updatedAnimal.breed_group || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Size"
              name="size"
              value={updatedAnimal.size || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Lifespan"
              name="lifespan"
              value={updatedAnimal.lifespan || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Origin"
              name="origin"
              value={updatedAnimal.origin || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Temperament"
              name="temperament"
              value={updatedAnimal.temperament || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Colors"
              name="colors"
              value={updatedAnimal.colors ? updatedAnimal.colors.join(", ") : ""}
              onChange={(e) =>
                setUpdatedAnimal({ ...updatedAnimal, colors: e.target.value.split(", ") })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={updatedAnimal.description || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        {animal && animal.type === "cat" && (
          <>
            <TextField
              label="Origin"
              name="origin"
              value={updatedAnimal.origin || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Temperament"
              name="temperament"
              value={updatedAnimal.temperament || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Colors"
              name="colors"
              value={updatedAnimal.colors ? updatedAnimal.colors.join(", ") : ""}
              onChange={(e) =>
                setUpdatedAnimal({ ...updatedAnimal, colors: e.target.value.split(", ") })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={updatedAnimal.description || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        {animal && animal.type === "bird" && (
          <>
            <TextField
              label="Species"
              name="species"
              value={updatedAnimal.species || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Family"
              name="family"
              value={updatedAnimal.family || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Habitat"
              name="habitat"
              value={updatedAnimal.habitat || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Place of Found"
              name="place_of_found"
              value={updatedAnimal.place_of_found || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Diet"
              name="diet"
              value={updatedAnimal.diet || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={updatedAnimal.description || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Weight (kg)"
              name="weight_kg"
              value={updatedAnimal.weight_kg || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Wingspan (cm)"
              name="wingspan_cm"
              value={updatedAnimal.wingspan_cm || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Update
        </Button>
      </Box>
      </DialogContent>

    </Modal>
  );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300, // Adjust the width as needed
    maxHeight: '80vh', // Set the maximum height to 80% of the viewport height
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: 'auto' // Enable scrolling if content exceeds modal height
  };
  
  
export default UpdateAnimalModal;
