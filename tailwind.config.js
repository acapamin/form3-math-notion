/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: '#ffffff',
          'bg-dark': '#191919',
          text: '#37352f',
          'text-dark': '#e9e9e7',
          'text-gray': '#787774',
          border: '#e9e9e7',
          'border-dark': '#373737',
          hover: '#f7f6f3',
          'hover-dark': '#2f2f2f',
          accent: '#2383e2',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', '"Apple Color Emoji"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
