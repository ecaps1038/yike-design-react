import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        title: '36px',
      },
      colors: {
        nav: '#2b5aed',
        asideLink: '#1572ff',
        asideLinkNormal: 'var(--fontcolorm)',
        primary: 'var(--yike-color-primary)',
      },
      borderColor: {
        yike: 'var(--yike-border-color)',
      },
      backgroundColor: {
        asideLink: '#1572ff1a',
      },
    },
  },
  plugins: [],
  // remove preflight to avoid affecting @yike-design/react components style
  corePlugins: {
    preflight: false,
  },
};

export default config;
