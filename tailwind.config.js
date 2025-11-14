/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#E6F1FF',
        'background': '#121212',
        'primary': '#00A9FF',
        'secondary': '#8892B0',
        'accent': '#00A9FF',
      },
    },
  },
  plugins: [],
}