// @ts-check
import mdx from '@next/mdx';
import slug from 'remark-slug';
import remarkGfm from 'remark-gfm';
import rehypeTOC from '@jsdevtools/rehype-toc';
import remarkFrontmatter from 'remark-frontmatter';
import docDemo from '@yike-design/remark-doc-demo';

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
      remarkFrontmatter,
      [
        docDemo,
        {
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
    // https://github.com/contentlayerdev/contentlayer/issues/313
    config.infrastructureLogging = {
      level: 'error',
    };
    config.externals.push('esbuild');
    return config;
  },
};

export default withMDX(nextConfig);
