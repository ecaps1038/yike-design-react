import type { Node } from 'unist';
import { resolve } from 'node:path';
import { visit } from 'unist-util-visit';
import type { Transformer } from 'unified';

export interface MDNode extends Node {
  lang?: string;
  meta: null | string;
  value: string;
}

// interface Options {
//   component: string;
// }

const DEMO_DIR = resolve(process.cwd(), 'src/content/demos');

export default function remarkDemoPlugin(): Transformer {
  return async (tree, vFile) => {
    interface Dep {
      file: string;
      path: string;
      absPath: string;
      // from node_modules
      // external: boolean;
      source: string;
      language: string;
      type: 'file' | 'NPM';
    }

    interface Imports {
      index: number;
      path: string;
      source: string;
      dependencies: Dep[];
      error?: Error;
    }

    const currentFile = vFile.history[0];

    const toAddImports: Imports[] = [];
    visit(tree, 'mdxJsxFlowElement', (node: any, index: number) => {
      if (node.name === 'code') {
        const srcAttr = node.attributes.find((attr: any) => attr.name === 'src');
        if (srcAttr) {
          const path = srcAttr.value as string;
          const dependencies: Dep[] = [];
          toAddImports.push({
            path,
            source: '',
            index,
            dependencies,
          });
        }
      }
    });

    toAddImports.forEach(({ path, index }) => {
      // @ts-expect-error
      tree.children.splice(index, 1, {
        type: 'mdxJsxFlowElement',
        name: 'DemoContainer',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'entry',
            value: path.replace('~demos', DEMO_DIR),
          },
        ],
      });
    });

    const toTransform: { index: number; value: string }[] = [];

    // ast has no pre element
    visit(tree, 'code', (node: MDNode, index: number) => {
      if (node.meta === 'pure') {
        node.data = {
          hProperties: {
            lang: node.lang,
            pure: true,
          },
        };
      } else {
        toTransform.push({ index: index + toTransform.length, value: node.value });
      }
    });

    toTransform.forEach((item, index) => {
      const exportName = `InlineDemo${index}`;
      const importPath = `!!@yike-design/inline-demo-loader?demo=${index}!${currentFile}`;
      // @ts-expect-error
      tree.children.splice(item.index, 0, {
        type: 'mdxjsEsm',
        value: `import ${exportName}, { raw as raw${index} } from '${importPath}';`,
        data: {
          estree: {
            type: 'Program',
            body: [
              {
                type: 'ImportDeclaration',
                specifiers: [
                  {
                    type: 'ImportDefaultSpecifier',
                    local: {
                      type: 'Identifier',
                      name: exportName,
                    },
                  },
                  {
                    type: 'ImportSpecifier',
                    imported: {
                      type: 'Identifier',
                      name: 'raw',
                    },
                    local: {
                      type: 'Identifier',
                      name: `raw${index}`,
                    },
                  },
                ],
                source: {
                  type: 'Literal',
                  value: importPath,
                  raw: `'${importPath}'`,
                },
              },
            ],
            sourceType: 'module',
            comments: [],
          },
        },
      });

      // @ts-expect-error
      tree.children.splice(item.index + 1, 1, {
        type: 'mdxJsxFlowElement',
        name: 'DemoContainer',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'inline',
            value: `${index}`,
          },
          {
            type: 'mdxJsxAttribute',
            name: 'entry',
            value: currentFile.replace(/\.mdx?$/, '.tsx'),
          },
          {
            type: 'mdxJsxAttribute',
            name: 'source',
            value: item.value,
          },
          // {
          //   type: 'mdxJsxAttribute',
          //   name: 'source',
          //   value: {
          //     type: 'mdxJsxAttributeValueExpression',
          //     value: `raw${index}`,
          //     data: {
          //       estree: {
          //         type: 'Program',
          //         body: [
          //           {
          //             type: 'ExpressionStatement',
          //             expression: {
          //               type: 'Identifier',
          //               name: `raw${index}`,
          //             },
          //           },
          //         ],
          //         sourceType: 'module',
          //         comments: [],
          //       },
          //     },
          //   },
          // },
        ],
      });
    });
  };
}
