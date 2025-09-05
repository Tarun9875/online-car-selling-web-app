// src/App.js
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
// import AboutUsPage from "./pages/AboutUsPage";
// import ContactPage from "./pages/ContactPage";
// import NotFoundPage from "./pages/NotFoundPage";

import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import CarCatalogPage from "./pages/customer/CarCatalogPage";
// import OrderPage from "./pages/customer/OrderPage";
// import MyAccountPage from "./pages/customer/MyAccountPage";

// import AdminLoginPage from "./pages/admin/AdminLoginPage";
// import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
// import ManageCarsPage from "./pages/admin/ManageCarsPage";
// import ManageOrdersPage from "./pages/admin/ManageOrdersPage";

// import AdminRoute from "./routes/AdminRoute";
// import CustomerRoute from "./routes/CustomerRoute";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f57c00" },
  },
  shape: { borderRadius: 12 },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          {/* Only Home Page visible */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<CustomerLoginPage />} />
          <Route path="/register" element={<CustomerRegisterPage />} />
         {/*display cars*/}
         <Route path="/customer/car-catalog" element={<CarCatalogPage />} />
          {/* <Route path="/about" element={<AboutUsPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
