/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'orange': 'hsl(25, 97%, 53%)',
        'lightGrey':'hsl(217, 12%, 63%)',
        'white': 'hsl(0, 0%, 100%)',
        'mediumGrey':'hsl(216, 12%, 54%)',
        'darkBlue': 'hsl(213, 19%, 18%)',
        'veryDarkBlue': 'hsl(216, 12%, 8%)',
      }
    },
  },
  plugins: [],
}
