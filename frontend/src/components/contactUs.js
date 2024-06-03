import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., sending email
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // You can send this data to your backend for further processing
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          value={subject}
          onChange={handleSubjectChange}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={handleMessageChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
      <Typography variant="body1" paragraph>
        If you prefer to reach out to us through other means, here is our address:
      </Typography>
      <Typography variant="body1">
        123 Main Street, Cityville, State, Country
      </Typography>
      <Typography variant="body1">
        Our office hours are Monday through Friday, from 9:00 AM to 5:00 PM (EST).
      </Typography>
    </Container>
  );
};

export default ContactUs;
