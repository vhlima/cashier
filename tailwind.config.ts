import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f6f6f6',
        grey: '#b5c0ca',
        yellow: '#f1dbad',
        brown: '#524239',
        red: '#dc2120',
        orange: '#dfa345',
      },
    },
  },
  plugins: [],
} satisfies Config;
