import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const CatModal = ({ open, handleClose, cat }) => {
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
        {cat && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {cat.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img
                src={cat.image}
                alt={cat.name}
                style={{ width: "100%", height: "auto" }}
              />
            </Typography>
            {cat.origin && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Origin:</strong> {cat.origin}
              </Typography>
            )}
            {cat.temperament && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Temperament:</strong> {cat.temperament}
              </Typography>
            )}
            {cat.colors && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Colors:</strong> {cat.colors.join(", ")}
              </Typography>
            )}
            {cat.description && (
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Description:</strong> {cat.description}
              </Typography>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};

export default CatModal;
