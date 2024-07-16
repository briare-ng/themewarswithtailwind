/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      starwars: ["Starjedi"],
    },
    extend: {
      backgroundImage: {
        light: "url('/images/background-light.jpg')",
        dark: "url('/images/background-dark.jpg')",
      },
    },
  },
  plugins: [],
};
