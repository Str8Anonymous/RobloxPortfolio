/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'text': '#E6F1FF',
        'background': '#121212',
        'primary': '#91bce1',
        'secondary': '#1f527e',
        'accent': '#4896d8',
      },
    },
  },
  plugins: [],
}