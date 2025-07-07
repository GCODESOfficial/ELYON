/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: 'var(--font-merriweather)',
        dm_sans: 'var(--font-dm-sans)',
        great_vibes: 'var(--font-great-vibes)',
      },
    },
  },
  plugins: [],
}