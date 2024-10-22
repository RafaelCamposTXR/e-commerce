/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Arquivos de páginas no Next.js
    './components/**/*.{js,ts,jsx,tsx}', // Componentes reutilizáveis
    './app/**/*.{js,ts,jsx,tsx}', // Diretório "app" para projetos usando Next.js 13 ou superior com layout padrão
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
