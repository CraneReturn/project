/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C6EF5",
        primaryDark: "#364FC7",
        background: "#F5F7FB",
      }
    },
  },
  plugins: [],
}
