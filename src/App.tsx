import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RootPage from "./pages/RootPage";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<RootPage />} />
          {/* TODO: * на / */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
