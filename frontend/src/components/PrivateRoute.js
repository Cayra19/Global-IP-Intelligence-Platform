import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? children : <Navigate to="/login" replace />;
};

export const AdminPrivateRoute = ({ children }) => {
  return localStorage.getItem("adminToken") ? children : <Navigate to="/admin/login" replace />;
};
