import React, { useState } from "react";
import { Modal, Button, TextField, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );
      console.log("Login response:", response.data); 

      if (response.data.message === "Login successful") {
        onClose();
        navigate("/admin");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          maxWidth: 400,
          margin: "0 auto",
          mt: 8,
          backgroundColor: "#fff",
          borderRadius: 1,
          boxShadow: 24,
        }}
      >
        <Typography id="login-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          fullWidth
          margin="normal"
          required
          aria-label="email"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          fullWidth
          margin="normal"
          required
          aria-label="password"
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
