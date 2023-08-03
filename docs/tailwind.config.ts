import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        title: '36px'
      },
      colors: {
        nav: '#2b5aed',
        asideLink: '#1572ff',
        asideLinkNormal: 'var(--fontcolorm)',
      },
      borderColor: {
        yike: 'var(--yike-border-color)',
      },
      backgroundColor: {
        asideLink: '#1572ff1a',
      }
    },
  },
  plugins: [],
}

export default config
