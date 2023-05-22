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

        primary: '#ea1d2c', // main color
        secondary: '#fff', // background
        tertiary: '#f7f7f7', // background highlight
        quaternary: '#dcdcdc', // borders
        't-primary': '#3e3e3e', // text
        't-secondary': '#717171', // text
        't-tertiary': '#1a1a1a',
        't-green': '#50a773',
        't-yellow': '#fcbb00',
      },
    },
  },
  plugins: [],
} satisfies Config;
