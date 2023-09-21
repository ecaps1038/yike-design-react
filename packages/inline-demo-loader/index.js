/**
 * @param {string} content
 */
// eslint-disable-next-line no-undef
module.exports = async function (content) {
  const cb = this.async();

  const options = this.getOptions();
  const demoId = parseInt(options.demo);
  if (!options.demo || Number.isNaN(demoId)) {
    return cb(null, 'export default ""');
  }

  try {
    const { visit } = await import('unist-util-visit');

    const { unified } = await import('unified');

    const { default: remarkParse } = await import('remark-parse');
    const { default: remarkMDX } = await import('remark-mdx');
    const { default: remarkStringify } = await import('remark-stringify');

    const { transform } = await import('esbuild');

    let value = 'export default ""';

    await unified()
      .use(remarkParse)
      .use(remarkMDX)
      .use(() => tree => {
        let index = 0;
        visit(tree, 'code', node => {
          if (node.meta) {
            return;
          }
          if (index === demoId) {
            value = node.value.trim() ?? value;
          }
          index++;
        });
      })
      .use(remarkStringify)
      .process(content);

    const { code } = await transform(value, { loader: 'jsx', jsx: 'automatic' });

    const addExportCode = code + `\nexport const raw = \`${value.replaceAll('`', '\\`')}\`;`;

    cb(null, addExportCode);
  } catch (error) {
    cb(error, '');
  }
};
