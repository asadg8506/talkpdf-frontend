import { Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import UploadPDF from "./pages/UploadPDF";
import AskQuestion from "./pages/AskQuestion";
import ChatHistory from "./pages/ChatHistory";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginSignup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>
            <UploadPDF />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ask"
        element={
          <ProtectedRoute>
            <AskQuestion />
          </ProtectedRoute>
        }
      />

      <Route path="/history"
        element={
        <ProtectedRoute>
          <ChatHistory />
        </ProtectedRoute>
        }
      />

      <Route path="*" element={<LoginSignup />} />
    </Routes>
  );
}
