/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// require("tailwindcss"), require("autoprefixer")

// const { fontFamily } = require("tailwindcss/defaultTheme")

// /** @type {import('tailwindcss').Config} / 
// module.exports = { 
//     content: ["./src/**/.{js,ts,jsx,tsx}",        "./node_modules/YOUR_LIBRARY/**/*.{js,ts,jsx,tsx}"], 
// theme: { extend: {}, fontFamily: { ...fontFamily, } }, plugins: [], }

