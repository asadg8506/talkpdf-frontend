//pdf.api.js
import api from "./axios";

export const uploadPDF = (formData) =>
  api.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const askQuestion = (question) =>
  api.post("/ask", question, {
    headers: { "Content-Type": "text/plain" },
  });

export const getHistory = () => api.get("/history");