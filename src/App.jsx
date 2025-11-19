import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginSignupPage from "./pages/LoginSignup";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginSignupPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
