// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import axiosInstance from "../api/axiosInstance";

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch featured cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axiosInstance.get("/customer/cars?limit=3"); // Example API
        setCars(res.data);
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 3,
          mb: 6,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Online Car Selling
        </Typography>
        <Typography variant="h6" gutterBottom>
          Find your dream car with just a few clicks!
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/customer/car-catalog"
            sx={{ mr: 2 }}
          >
            Browse Cars
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            component={RouterLink}
            to="/about"
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Featured Cars Section */}
      <Typography variant="h4" textAlign="center" gutterBottom>
        Featured Cars
      </Typography>
      {loading ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {cars.length > 0 ? (
            cars.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car._id}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={car.image || "/images/default-car.jpg"}
                    alt={car.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {car.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {car.description?.slice(0, 60)}...
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      ${car.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ width: "100%", mt: 2 }}
            >
              No featured cars available.
            </Typography>
          )}
        </Grid>
      )}

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          mt: 8,
          bgcolor: "secondary.main",
          color: "white",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to get started?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sign up today and start browsing the best deals on cars.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/customer/register"
          sx={{ mt: 2 }}
        >
          Register Now
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
