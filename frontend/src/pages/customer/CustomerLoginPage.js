import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CustomerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // ✅ for navigation

  // Mock login function
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Hardcoded "fake" API
    const mockUser = {
      email: "customer@example.com",
      password: "123456",
    };

    if (email === mockUser.email && password === mockUser.password) {
      setSuccess("Login successful! Welcome back.");
      setError("");
      // Simulate storing token
      localStorage.setItem("token", "mockToken123");

      // ✅ Redirect to home after 1 second
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setError("Invalid email or password.");
      setSuccess("");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 10,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Customer Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
