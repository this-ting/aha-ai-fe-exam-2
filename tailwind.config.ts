import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        black: '#121212',
        navBlack: '#1B1B1B',
        white10: '#FFFFFF1A',
        white50: '#FFFFFF80',
        inactiveGrey: '#6A6A6A',
        logoOrange: '#FF5C01',
        logoYellow: '#FFD25F',
        tutorOrange: '#FF9B33',
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['14px', '21px'],
        '2xl': ['24px', '36px'],
        '5xl': ['48px', '72px'],
      },
    },
  },
  plugins: [],
};
export default config;
