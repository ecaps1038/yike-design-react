import type { Config } from 'tailwindcss';

const HEADER_HEIGHT = '60px';
const ASIDE_WIDTH = '268px';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        header: HEADER_HEIGHT,
        aside: `calc(100vh - ${HEADER_HEIGHT})`,
      },
      width: {
        aside: ASIDE_WIDTH,
      },
      margin: {
        aside: ASIDE_WIDTH,
      },
      padding: {
        header: HEADER_HEIGHT,
      },
      spacing: {
        header: HEADER_HEIGHT,
        aside: ASIDE_WIDTH,
      },
      letterSpacing: {
        title: '36px',
      },
      colors: {
        primary: 'var(--yike-primary-color)',
        danger: 'var(--yike-danger-color)',
        'yike-bg-1': 'var(--yike-background-color-1)',
        'yike-bg-2': 'var(--yike-background-color-2)',
        'yike-bg-3': 'var(--yike-background-color-3)',
        'yike-bg-4': 'var(--yike-background-color-4)',
      },
      borderColor: {
        'yike-1': 'var(--yike-line-color-1)',
        'yike-2': 'var(--yike-line-color-2)',
        'yike-3': 'var(--yike-line-color-3)',
      },
      backgroundColor: {
        neutral: 'var(--yike-neutral-color)',
        'neutral-1': 'var(--yike-neutral-color-1)',
        'neutral-2': 'var(--yike-neutral-color-2)',
        'primary-1': 'var(--yike-primary-color-1)',
        'yike-1': 'var(--yike-background-color-1)',
        'yike-2': 'var(--yike-background-color-2)',
        'yike-3': 'var(--yike-background-color-3)',
        'yike-4': 'var(--yike-background-color-4)',
        'yike-neutral': 'var(--yike-neutral-color)',
        'yike-text-1': 'var(--yike-text-color-1)',
        'yike-text-2': 'var(--yike-text-color-2)',
        'yike-text-3': 'var(--yike-text-color-3)',
        'yike-text-4': 'var(--yike-text-color-4)',
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
