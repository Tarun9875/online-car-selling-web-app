import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

// Mock car data
const mockCars = [
  {
    id: 1,
    name: "Toyota Corolla",
    description: "Reliable and fuel-efficient sedan",
    price: 15000,
    image:
      "/images/5.jpeg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Honda Civic",
    description: "Sporty and stylish compact car",
    price: 18000,
    image: "/images/3.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Ford Mustang",
    description: "Powerful muscle car with iconic design",
    price: 35000,
    image: "/images/4.jpg", // Replace with actual image URL
  },
];

export default function CarCatalogPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulate fetching cars from API
    setCars(mockCars);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Car Catalog
      </Typography>

      <Grid container spacing={3}>
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={car.name}
              />
              <CardContent>
                <Typography variant="h6">{car.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {car.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  ${car.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  fullWidth
                  onClick={() => alert(`Car "${car.name}" selected!`)}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
