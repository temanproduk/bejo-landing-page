import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Brand from "@/pages/Brand";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Brand />
  </StrictMode>
);
