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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
<AppBar position="static" style={{ 
    backgroundImage: `url(https://img.freepik.com/premium-photo/dog-cat-are-looking-green-parrot-red-background_910054-73578.jpg?w=826)`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    width: '100%', 
    height: '500px' 
}}>
      <Container>
        <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        <span style={{ fontSize: '3rem', color: '#FFFFFF', fontWeight: 'bold' }}>Pet Expo</span>
      </Typography>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button color="inherit" onClick={handleMenuOpen}>
            Pet Categories
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
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
            }}
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
          <Button component={Link} to="/AboutUs" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/ContactUs" color="inherit">
            Contact Us
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
