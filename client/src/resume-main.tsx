import React from "react";
import { createRoot } from "react-dom/client";
import Resume from "./pages/resume";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in resume.html");
}

createRoot(container).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
