/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta la ruta para incluir archivos de React
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700'
      }
    },
  },
  plugins: [],
}
