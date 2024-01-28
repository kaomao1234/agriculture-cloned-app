import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    fontFamily: {
      roboto: ['Roboto',
        'sans-serif'],
      yellowtail: ['Yellowtail', 'cursive'],
    },
    colors: {
      'transparent': 'transparent',
      'blue_dianne': '#274C5B',
      'acapulco': '#7EB693',
      'sunset_pearl': '#EFD372',
      'black_coral_pearl': '#525C60',
      'alto': '#D4D4D4',
      'alabaster': '#F9F8F8',
      'saltpan': '#EFF6F1',
      'slate_600':"#335B6B",
      'white': "white",
      ...colors
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
