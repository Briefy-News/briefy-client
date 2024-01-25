/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/theme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/modal.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5569FF',
        secondary: '#EBEDFF',
        success: '#EA021E',
        warning: '#EA021E',
        black900: '#1C1C1E',
        black700: '#6E6D73',
        black500: '#B3B4B9',
        black300: '#E4E5EA',
        black100: '#FBFBFD',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [nextui()],
};
