import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import LoginModal from "./modals/loginModal";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  const appBarStyle = {
    backgroundImage: `url(https://img.freepik.com/premium-photo/dog-cat-are-looking-green-parrot-red-background_910054-73578.jpg?w=826)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '500px',
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#FFFFFF',
  };

  const menuStyles = {
    "& .MuiPaper-root": {
      backgroundColor: "#f5f5f5",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      mt: 1,
    },
    "& .MuiMenuItem-root": {
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
      "&.Mui-selected": {
        backgroundColor: "#d0d0d0",
      },
    },
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <span style={titleStyle}>Pet Expo</span>
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button color="inherit" onClick={handleMenuOpen} aria-controls="simple-menu" aria-haspopup="true">
            Categories
          </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left", // Specify horizontal position
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={menuStyles}
      
          >
            <MenuItem component={Link} to="/dogs" onClick={handleMenuClose}>
              Dogs
            </MenuItem>
            <MenuItem component={Link} to="/cats" onClick={handleMenuClose}>
              Cats
            </MenuItem>
            <MenuItem component={Link} to="/birds" onClick={handleMenuClose}>
              Birds
            </MenuItem>
          </Menu>
          <Button component={Link} to="/aboutUs" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/contactUs" color="inherit">
            Contact Us
          </Button>
          <Button onClick={handleLoginModalOpen} color="inherit">
            Login
          </Button>
          <LoginModal open={loginModalOpen} onClose={handleLoginModalClose} />

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
