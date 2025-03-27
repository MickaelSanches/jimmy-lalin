/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,jsx,tsx,js}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
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
