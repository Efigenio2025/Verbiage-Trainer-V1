import type { Config } from 'tailwindcss';

export default <Config>{
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './demo/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // optional: semantic tokens if needed later
      },
      backgroundImage: {
        'ashwood-gradient': 'linear-gradient(to bottom, #4b5563, #6b7280)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
