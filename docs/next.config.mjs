// @ts-check
import fs from 'fs-extra';
import mdx from '@next/mdx';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import remarkDemo from '@yike-design/remark-demo-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

const YIKE_DEMO_PATH = resolve(__dirname, '.yike');

if (!fs.existsSync(YIKE_DEMO_PATH)) {
  fs.mkdirSync(YIKE_DEMO_PATH);
}

/**
 * when resolve demo code block
 * @param {string} _file file path
 * @param {string} current current demo name
 * @param {string} source demo source code
 */
const onResolve = (_file, current, source) => {
  const target = resolve(YIKE_DEMO_PATH, `${current}.tsx`);
  fs.ensureDirSync(dirname(target));
  fs.writeFileSync(target, source, 'utf-8');
};

const remarkDemoPlugin = () => remarkDemo({ component: 'YiKeDemo', onResolve });

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
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@yike-demo': resolve(__dirname, '.yike'),
    };
    return config;
  },
};

export default withMDX(nextConfig);
