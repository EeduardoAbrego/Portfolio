/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}', './styles/**/*.css'],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#fefeff10',
        'custom-blue1': 'rgb(53, 96, 189) ',
      },
      colors: {
        'custom-blue': 'rgb(53, 96, 189)',
        'custom-blue-1': 'rgb(2, 28, 112)',
      },
      backdropFilter: {
        'custom-blur': 'blur(0.3rem)',
      },
      dropShadow: {
        '3xl': ' 3px 5px 0 rgb(10, 26, 172);',
      },
      keyframes: {
        slidein: {
          from: { 'margin-left': '100%', width: '300%' },
          to: { 'margin-left': '0%', width: '100%' },
        },
      },
      animation: {
        slidein: ' slidein 2s ',
      },
    },
  },
  plugins: [],
};
