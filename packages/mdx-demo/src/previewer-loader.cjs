/* eslint-env node */
const { URLSearchParams } = require('url');

/**
 * @this {import('webpack').LoaderContext<any>}
 * @param {string} content
 */
module.exports = async function (content) {
  const params = new URLSearchParams(this.resourceQuery);
  const inline = params.get('inline');
  const demo = params.get('demo-path');
  const path = inline ? `!!@yike-design/mdx-demo/inline-loader?demo=${inline}!${demo}` : demo;

  return content.replace('__PREVIEWER_DEMO_PATH__', path);
};
