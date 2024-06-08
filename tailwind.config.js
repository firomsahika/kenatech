/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#024430',
        secondary:'#FFE7BB',
        tertiary:'#FFEADE',
        quaternary:'#E0F1F4',
        promotebg:"#E0F0FC",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
