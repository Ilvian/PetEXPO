import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const BirdModal = ({ open, handleClose, bird }) => {
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
        {bird && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {bird.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img
                src={bird.image}
                alt={bird.name}
                style={{ width: "100%", height: "auto" }}
              />
            </Typography>
            {bird.species && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Species:</strong> {bird.species}
              </Typography>
            )}
            {bird.family && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Family:</strong> {bird.family}
              </Typography>
            )}
            {bird.habitat && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Habitat:</strong> {bird.habitat}
              </Typography>
            )}
            {bird.place_of_found && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Place of found:</strong> {bird.place_of_found}
              </Typography>
            )}
            {bird.diet && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Diet:</strong> {bird.diet}
              </Typography>
            )}
            {bird.description && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Description:</strong> {bird.description}
              </Typography>
            )}
                        {bird.weight_kg && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Weight:</strong> {bird.weight_kg}
              </Typography>
            )}
            {bird.wingspan_cm && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Wingspan:</strong> {bird.wingspan_cm}
              </Typography>
            )}

          </>
        )}
      </Box>
    </Modal>
  );
};

export default BirdModal;
