// @ts-check
/* eslint-env node */
const EMPTY_CODE = 'export default ""';

/**
 *
 * @param {string} content
 * @returns {Promise<string[]>}
 */
const getAllInlineCode = async content => {
  const { visit } = await import('unist-util-visit');

  const { unified } = await import('unified');

  const { default: remarkParse } = await import('remark-parse');
  const { default: remarkMDX } = await import('remark-mdx');
  const { default: remarkStringify } = await import('remark-stringify');

  const inlineCodes = [];

  await unified()
    .use(remarkParse)
    .use(remarkMDX)
    .use(() => tree => {
      visit(tree, 'code', node => {
        if (node.meta) {
          return;
        }
        inlineCodes.push(node.value.trim() ?? EMPTY_CODE);
      });
    })
    .use(remarkStringify)
    .process(content);
  return inlineCodes;
};

/**
 * @param {string[]} inlineCodes
 * @returns {Promise<string>}
 */
const transformAllInline = async inlineCodes => {
  const { default: sucrase } = await import('sucrase');

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
 * @this {import('webpack').LoaderContext<any>}
 * @param {string} content
 */
module.exports = async function (content) {
  const cb = this.async();

  const option = this.getOptions();

  const demo = option.demo;

  try {
    const inlineCodes = await getAllInlineCode(content);
    if (demo) {
      const { transform } = await import('esbuild');
      const { code } = await transform(inlineCodes[demo], { loader: 'tsx', jsx: 'automatic' });
      cb(null, code);
    } else {
      const result = await transformAllInline(inlineCodes);
      cb(null, result);
    }
  } catch (error) {
    cb(error, '');
  }
};
