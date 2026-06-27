import React from "react";
import { Navigate } from "react-router-dom";

const isValidJwt = (token) => {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp && payload.exp * 1000 > Date.now();
  } catch (error) {
    return false;
  }
};

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!isValidJwt(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const AdminPrivateRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!isValidJwt(token)) {
    localStorage.removeItem("adminToken");
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};
