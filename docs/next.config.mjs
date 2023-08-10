// @ts-check
import fs from 'fs-extra';
import mdx from '@next/mdx';
import slug from 'remark-slug';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import rehypeTOC from '@jsdevtools/rehype-toc';
import docDemo from '@yike-design/remark-doc-demo';

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

/**
 *  @typedef { import('./src/types').HTMLElementNode } HTMLElementNode
 */

/**
 * transform TOC element
 * @param {HTMLElementNode} element
 * @returns {import('./src/types').TOCData[]}
 */
const transformTOCElement = element => {
  switch (element.tagName) {
    case 'ol':
      return element.children?.map(item => transformTOCElement(item)).flat() ?? [];
    case 'li':
      if (element.children?.length && element.children[0].tagName === 'a') {
        const children = element.children;
        const link = children[0];
        // TODO: improve type definition
        const nav = {
          // @ts-expect-error type definition error
          text: /** @type {string} */ (link.children?.[0].value),
          href: /** @type {string} */ (link.properties.href),
          children: children
            .slice(1)
            .map(item => transformTOCElement(item))
            .flat(),
        };
        return [nav];
      }
    default:
      return [];
  }
};

/**
 * customize TOC
 * @param {HTMLElementNode} element
 */
const customizeTOC = element => {
  return {
    type: 'element',
    tagName: 'YiKeTOC',
    properties: {
      toc: JSON.stringify(transformTOCElement(element)),
    },
  };
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      slug,
      remarkGfm,
      [
        docDemo,
        {
          onResolve,
          component: 'YiKeDemo',
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeTOC,
        {
          nav: false,
          customizeTOC,
          headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
        },
      ],
    ],
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
