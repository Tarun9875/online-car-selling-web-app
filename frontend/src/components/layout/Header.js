import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  
  // State to track login
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change initial as needed
  const user = { name: "John Doe", email: "john@example.com" };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Reset login state
    setIsLoggedIn(false);
    handleClose();
    // Redirect to home page
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: "inherit", textDecoration: "none" }}>
          Online Car Selling
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>

          {isLoggedIn && (
            <Button color="inherit" component={Link} to="/cars">
              Cars
            </Button>
          )}

          {!isLoggedIn && (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}

          {isLoggedIn && (
            <>
              <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                <Avatar alt={user.name} src="/avatar.png" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem disabled>{user.name}</MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  My Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
