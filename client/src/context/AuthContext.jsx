import React, { useState, useEffect } from "react";
import { AuthContext } from "./auth.jsx"; // import context

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    if (token) setIsAuthenticated(true);
  }, []);

  const login = (token) => {
    localStorage.setItem("authtoken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authtoken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
