// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { loginAPI, logoutAPI } from "../api/auth.api"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token"); 
    if (token) setIsAuthenticated(true);
  }, []);

  
  const login = async (email, password) => {
    const res = await loginAPI({ email, password });

    const accessToken = res.data.access_token;
    const refreshToken = res.data.refresh_token;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);

    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await logoutAPI();
    } catch (err) {
      console.log(err);
    }

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);