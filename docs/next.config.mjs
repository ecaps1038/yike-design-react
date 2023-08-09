// @ts-check
import mdx from '@next/mdx';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import fs from 'fs-extra'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import remarkDemo from 'remark-demo-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

const YIKE_DEMO_PATH = resolve(__dirname, '.yike');

if (!existsSync(YIKE_DEMO_PATH)) {
  mkdirSync(YIKE_DEMO_PATH);
}

const onResolve = (_, current, source) => {
  const target = resolve(YIKE_DEMO_PATH, `${current}.tsx`);
  fs.ensureDirSync(dirname(target));
  writeFileSync(target, source, 'utf-8');
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
