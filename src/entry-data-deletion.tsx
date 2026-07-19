import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataDeletion from "@/pages/DataDeletion";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataDeletion />
  </StrictMode>
);
