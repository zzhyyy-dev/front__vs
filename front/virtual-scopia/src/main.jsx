import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "@context/AuthContext"; 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Envolva o AppRoutes com AuthProvider */}
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
);
