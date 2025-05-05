import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7F3C7D",
        "secondary": "#D899D9",
        "tertiary": "#FCF7FC",
        "content-body": "#222233",
        "content-body-80": '#222233CC',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
