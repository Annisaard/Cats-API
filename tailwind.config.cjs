/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Oren: "#F34100",
        Biru: "#192f61",
        Birumuda: "#224289",
        Putih: "#FDFAEB",
      },
    },
  },
  plugins: [require("daisyui")],
};
