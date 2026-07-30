import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Compare from "@/pages/Compare";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Compare />
  </StrictMode>
);
