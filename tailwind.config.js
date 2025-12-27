/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#F5EEE3",
        ink: "#1B1B1B",
        muted: "rgba(0,0,0,0.55)",
        line: "rgba(0,0,0,0.10)",
        brand: {
          // closer to the muted golden-brown buttons in your screenshot
          50: "#FBF6EE",
          100: "#F5E8CF",
          200: "#EAD4A5",
          300: "#D9B978",
          400: "#C89E54",
          500: "#B8843D",
          600: "#9B6C33",
          700: "#7E552A",
          800: "#624221",
          900: "#4A321A",
        },
      },
      borderRadius: {
        card: "14px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 10px 28px rgba(0,0,0,0.05)",
        soft: "0 6px 18px rgba(0,0,0,0.06)",
      },
      maxWidth: {
        figma: "1080px",
      },
    },
  },
  plugins: [],
};
