// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

console.log("API URL:", import.meta.env.VITE_API_URL);
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) { config.headers.Authorization = `Bearer ${token}`; }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ( error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) { window.location.href = "/login";
          return;
        }

        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/refresh`,
          { refresh_token: refreshToken } );

        const newAccessToken = res.data.access_token;
        localStorage.setItem("access_token", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);

      } catch (err) {

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      } }

    return Promise.reject(error);
  });

export default instance;