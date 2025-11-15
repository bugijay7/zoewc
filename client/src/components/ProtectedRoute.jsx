import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.js";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // ⏳ Wait for AuthContext to finish checking token
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 🔐 Correct token check
  const token = localStorage.getItem("token");

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
