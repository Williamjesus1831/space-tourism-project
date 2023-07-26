/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#0B0D17",
        secondarycolor: "#D0D6F9",
        tercerycolor: "#FFFFFF",
      },
      fontFamily: {
        'Barlow': ["sans-serif"],
        'Bellefair': ["serif"],
      }
    },
  },
  plugins: [],
}