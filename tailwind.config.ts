// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Inclut les fichiers dans `app` si vous utilisez la structure app
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './styles/**/*.{scss,css}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}