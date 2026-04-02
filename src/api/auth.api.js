//auth.api.js
import api from "./axios";

export const loginAPI = (data) => {
  return api.post("/login", data);
};

export const signupAPI = (data) => {
  return api.post("/signup", data);
};

export const logoutAPI = () => {
  return api.post("/logout");
};


