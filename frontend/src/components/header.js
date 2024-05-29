import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Header = () => {
  const [showAnimals, setShowAnimals] = useState(false);

  const toggleAnimals = () => {
    setShowAnimals(!showAnimals);
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Pet Expo</h1>
        <div style={{ marginLeft: "auto", position: "relative" }}>
          <Button component={Link} to="/" style={{ marginRight: "10px" }}>
            Home
          </Button>
          <Button onClick={toggleAnimals} style={{ marginRight: "10px" }}>
            Pet Categories
          </Button>
          {showAnimals && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                zIndex: 999,
              }}
            >
              <Button
                component={Link}
                to="/dogs"
                style={{ marginRight: "10px" }}
              >
                Dogs
              </Button>
              <Button
                component={Link}
                to="/cats"
                style={{ marginRight: "10px" }}
              >
                Cats
              </Button>
              <Button
                component={Link}
                to="/birds"
                style={{ marginRight: "10px" }}
              >
                Birds
              </Button>
            </div>
          )}
        </div>
        <Button component={Link} to="/about" style={{ marginRight: "10px" }}>
          About Us
        </Button>
        <Button component={Link} to="/contact">
          Contact Us
        </Button>
      </div>
    </Container>
  );
};

export default Header;