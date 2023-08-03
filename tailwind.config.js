/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "#fca5a5",
          1: "#fde047",
          2: "#4ade80",
          3: "#06b6d4",
        },
      },
      screens: {
        md: "768px",
        "m-md": { max: "768px" },
        "l-md": { max: "1050px", min:"768px"},
      },
    },
  },
  plugins: [],
};
