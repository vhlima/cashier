import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        pink: '0 0 16px rgba(253,155,176, 0.4)',
      },
      colors: {
        'white-low': '#f6f6f6',
        grey: '#b5c0ca',
        'grey-200': '#babdc4',
        'grey-300': '#afb3bb',
        'yellow-100': '#fdf3da',
        yellow: '#f1dbad',
        brown: '#524239',
        red: '#ff2454',
        orange: '#dfa345',
      },
    },
  },
  plugins: [],
} satisfies Config;
