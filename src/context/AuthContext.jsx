import { createContext, useContext, useEffect, useState } from "react";
import { setToken, getToken, removeToken } from "../utils/token";
import { loginAPI, logoutAPI } from "../api/auth.api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) setIsAuthenticated(true);
  }, []);

  const login = async (email, password) => {
    const res = await loginAPI({ email, password });
    const token = res.data.access_token;

    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await logoutAPI();
    } catch (err) {
      console.log(err);
    }

    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
