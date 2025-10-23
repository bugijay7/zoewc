import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem("authToken");

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
