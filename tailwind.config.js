/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./build/js/app.js"],
  theme: {
    extend: {
      backgroundColor: {
        alpha: "rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};