import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Custom domain served at root, so base is "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy.html"),
        dataDeletion: resolve(__dirname, "data-deletion.html"),
        contact: resolve(__dirname, "contact.html"),
        brand: resolve(__dirname, "brand.html"),
      },
    },
  },
});
