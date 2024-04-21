import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          DEFAULT: '#00CAD7',
          light: '#14B1F0',
          dark: '#0AAEB9',
        },
        'dark-teal': '#03484D',
        'fire-engine': '#C82020',
      },
    },
  },
  plugins: [],
}
export default config
