import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const DogModal = ({ open, handleClose, dog }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {dog && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {dog.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img
                src={dog.image}
                alt={dog.name}
                style={{ width: "100%", height: "auto" }}
              />
            </Typography>
            {dog.breed_group && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Breed Group:</strong> {dog.breed_group}
              </Typography>
            )}
            {dog.size && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Size:</strong> {dog.size}
              </Typography>
            )}
            {dog.lifespan && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Lifespan:</strong> {dog.lifespan}
              </Typography>
            )}
            {dog.origin && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Origin:</strong> {dog.origin}
              </Typography>
            )}
            {dog.temperament && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Temperament:</strong> {dog.temperament}
              </Typography>
            )}
            {dog.colors && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Colors:</strong> {dog.colors.join(", ")}
              </Typography>
            )}
            {dog.description && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Description:</strong> {dog.description}
              </Typography>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};

export default DogModal;
