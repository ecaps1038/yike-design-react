import mdx from '@next/mdx';
import { resolve } from 'path';
import remarkDemo from 'remark-demo-plugin';

const __dirname = new URL('.', import.meta.url).pathname;

const YIKE_DEMO_PATH = resolve(__dirname, 'node_modules', 'yike');

// if (existsSync(YIKE_DEMO_PATH)) {
//   rmSync(YIKE_DEMO_PATH, { recursive: true })
// }

// mkdirSync(YIKE_DEMO_PATH)

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkDemo],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    YIKE_DEMO_PATH,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['@yike-design/react'],
};

export default withMDX(nextConfig);
