/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./privacy.html",
    "./data-deletion.html",
    "./contact.html",
    "./brand.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      fontFamily: {
        // Condensed poster face, the voice of Indonesian shop signage.
        display: ["Anton", "Impact", "sans-serif"],
        // Commissioned for Jakarta's city identity; the right body voice here.
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        // Receipt / terminal register for labels and amounts.
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0A1710",
          soft: "#46534A",
          faint: "#7C877F",
        },
        paper: {
          DEFAULT: "#F2F5EF",
          warm: "#E8EDE4",
        },
        green: {
          DEFAULT: "#2E7D57",
          dark: "#1F6244",
          deep: "#12402A",
        },
        gold: {
          DEFAULT: "#E0A32E",
          dark: "#B57C0F",
        },
        mint: "#DCEEE2",
        line: "rgba(10, 23, 16, 0.12)",
        "line-strong": "rgba(10, 23, 16, 0.28)",
      },
      borderRadius: {
        panel: "14px",
        control: "10px",
      },
      boxShadow: {
        lift: "0 18px 44px rgba(10, 23, 16, 0.12)",
        press: "0 2px 0 rgba(10, 23, 16, 0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        bar: {
          "0%, 100%": { transform: "scaleY(0.25)" },
          "50%": { transform: "scaleY(1)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        "overlay-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "sheet-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        bar: "bar 0.7s ease-in-out infinite",
        "rise-in": "rise-in 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "overlay-in": "overlay-in 0.2s ease-out",
        "sheet-in": "sheet-in 0.28s cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },
  plugins: [],
};
