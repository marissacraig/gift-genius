require("tailwindcss") 
require("autoprefixer")

const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {}, 
    fontFamily: { ...fontFamily, }
  },
  plugins: [require('flowbite/plugin')],
}

