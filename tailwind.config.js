/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./privacy.html",
    "./data-deletion.html",
    "./contact.html",
    "./brand.html",
    "./perbandingan.html",
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
        // The app's wordmark face: Roboto Condensed Bold (the app sets "BeJo" in sans-serif-condensed bold).
        display: ['"Roboto Condensed"', "Roboto", "sans-serif"],
        // The app's body face — Roboto, the Android system default its screens use.
        sans: ["Roboto", "system-ui", "sans-serif"],
        // Receipt / terminal register for labels and amounts (the app's monospace for IDs).
        mono: ['"Roboto Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        // The tokens below are the Android app's colors.xml values (on_surface, background, primary…).
        ink: {
          DEFAULT: "#16201A",
          soft: "#59635C",
          faint: "#6F7A73", // not an app token: the app's #8C968E is too pale for text on paper
        },
        paper: {
          DEFAULT: "#F3F6F2",
          warm: "#E6EBE4",
        },
        green: {
          DEFAULT: "#2E7D57",
          dark: "#256B49",
          deep: "#215F41",
        },
        gold: {
          DEFAULT: "#E0A32E",
          dark: "#C4881C",
        },
        mint: "#E4F1E9",
        // The app's dark surface (brand_night): the splash background.
        night: "#070E14",
        line: "rgba(22, 32, 26, 0.12)",
        "line-strong": "rgba(22, 32, 26, 0.28)",
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
