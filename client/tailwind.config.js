/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#00A6FB",
      dark: "#051923",
      deepBlue: "#003554",
      brightBlue: "#0582CA",
      red: "#FF3333",
      gray: "#F5F5F5",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"], // Added Montserrat font
    },
  },
};
export const plugins = [];
