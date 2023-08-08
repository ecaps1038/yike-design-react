import mdx from '@next/mdx';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import remarkDemo from 'remark-demo-plugin';

const __dirname = new URL('.', import.meta.url).pathname;

const YIKE_DEMO_PATH = resolve(__dirname, '.yike');

if (!existsSync(YIKE_DEMO_PATH)) {
  mkdirSync(YIKE_DEMO_PATH);
}

const onResolve = (_, current, source) => {
  writeFileSync(resolve(YIKE_DEMO_PATH, `${current}.tsx`), source, 'utf-8');
}

const remarkDemoPlugin = () => remarkDemo({ component: 'YiKeDemo', onResolve })

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkDemoPlugin],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'export',
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['@yike-design/react'],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@yike-demo': resolve(__dirname, '.yike'),
    };
    return config;
  }
};

export default withMDX(nextConfig);
