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
        compare: resolve(__dirname, "perbandingan.html"),
        // English copies of every page, served under /en/.
        enMain: resolve(__dirname, "en/index.html"),
        enPrivacy: resolve(__dirname, "en/privacy.html"),
        enDataDeletion: resolve(__dirname, "en/data-deletion.html"),
        enContact: resolve(__dirname, "en/contact.html"),
        enBrand: resolve(__dirname, "en/brand.html"),
        enCompare: resolve(__dirname, "en/perbandingan.html"),
      },
    },
  },
});
