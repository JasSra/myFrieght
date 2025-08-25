import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0ea5e9', dark: '#0284c7', 50: '#eff9ff', 100: '#dff3ff' },
      },
      container: { center: true, padding: '1rem' },
      borderRadius: { xl: '0.75rem' },
    },
  },
  plugins: [],
} satisfies Config;
