/* eslint-env node */
const EMPTY_CODE = 'export default ""';

/**
 * @param {string} content
 * @returns {Promise<string>}
 */
const transform = async content => {
  const { visit } = await import('unist-util-visit');

  const { unified } = await import('unified');

  const { default: remarkParse } = await import('remark-parse');
  const { default: remarkMDX } = await import('remark-mdx');
  const { default: remarkStringify } = await import('remark-stringify');

  const { default: sucrase } = await import('sucrase');

  const inlineCodes = [];

  await unified()
    .use(remarkParse)
    .use(remarkMDX)
    .use(() => tree => {
      visit(tree, 'code', node => {
        if (node.meta === 'pure') {
          return;
        }
        inlineCodes.push(node.value.trim() ?? EMPTY_CODE);
      });
    })
    .use(remarkStringify)
    .process(content);

  return inlineCodes
    .map((value, index) => {
      const result = sucrase.transform(value, {
        transforms: ['jsx', 'imports', 'typescript'],
        jsxRuntime: 'automatic',
        production: true,
      });
      return `export const demo${index} = function() { \n ${result.code.replace('exports. default =', `return`)} \n}`;
    })
    .join('\n');
};

/**
 * @param {string} content
 */
module.exports = async function (content) {
  const cb = this.async();

  try {
    const result = await transform(content);
    cb(null, result);
  } catch (error) {
    cb(error, '');
  }
};
