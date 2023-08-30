/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['Kumbh'],
      },
      colors: {
        primaly: 'hsl(229, 23%, 23%)',
        secondly: 'hsl(0, 0%, 59%)',
        rear: 'hsl(185, 75%, 39%)',
        by: 'hsl(228, 45%, 44%)',
        thirdary: 'hsl(227, 10%, 46%)',
      },
    },
  },
  plugins: [],
}

