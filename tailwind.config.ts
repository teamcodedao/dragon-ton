import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD900',
        secondary: '#FF393A',
      },
      dropShadow: {
        normal: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
