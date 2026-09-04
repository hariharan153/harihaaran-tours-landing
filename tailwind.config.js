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
        'outfit': ['Outfit', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      borderRadius: {
        '32': '32px',
        '40': '40px',
      },
      maxWidth: {
        '1600': '1600px',
      },
      spacing: {
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
