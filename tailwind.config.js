/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wander-bg': '#f3efe8',
        'wander-blue': '#7bb5cc',
        'wander-orange': '#d9772b',
        'wander-dark': '#1f3d47',
        'wander-text': '#2a3b45',
      },
      fontFamily: {
        'outfit': ['Outfit', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
