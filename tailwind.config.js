/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,jsx,tsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F2876",  // Violet
        secondary: "#D1BB34", // Doré
        dark: "#000000",      // Noir
        light: "#FFFFFF",     // Blanc
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
