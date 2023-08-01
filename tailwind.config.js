/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#FF0000",
          2: "#00FFFF",
          3: "#FFF700",
          4: "#2BFF00",
        },
      },
      screens: {
        md: "768px",
        "m-md": { max: "768px" },
        "l-md": { max: "1050px" },
      },
    },
  },
  plugins: [],
};
