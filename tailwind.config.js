/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",           // <-- ESSENCIAL
    "./public/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        primary: '#00d4ff',
        secondary: '#7c3aed',
        bgPrimary: '#0a0a0f',
        bgSecondary: '#111118',
        border: '#1f1f2e',
        borderLight: '#2a2a3d',
        textPrimary: '#e0e0ff',
        textSecondary: '#94a3b8',
      },
    },
  },
  plugins: [],
}