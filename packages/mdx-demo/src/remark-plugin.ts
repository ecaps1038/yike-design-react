import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import type { Transformer } from 'unified';

export interface MDNode extends Node {
  lang?: string;
  meta: null | string;
  value: string;
}

interface ExternalRecord {
  index: number;
  path: string;
}

interface InlineRecord {
  index: number;
  value: string;
}

interface Option {
  component: string;
}

export default function remarkDemoPlugin({ component }: Option): Transformer {
  if (!component) {
    throw new Error('the option component is required');
  }
  return async (tree, vFile) => {
    const currentFile = vFile.history[0];

    const externalRecords: ExternalRecord[] = [];
    visit(tree, 'mdxJsxFlowElement', (node: any, index: number) => {
      if (node.name === 'code') {
        const srcAttr = node.attributes.find((attr: any) => attr.name === 'src');
        if (srcAttr) {
          const path = srcAttr.value as string;
          externalRecords.push({
            path,
            index,
          });
        }
      }
    });

    externalRecords.forEach(({ path, index }) => {
      // const requirePath = `!!@yike-design/mdx-demo/previewer-loader?demo-path=${path}!@/components/demo/PreviewerContainer4Doc.tsx`;
      const requirePath = `@/components/demo/PreviewerContainer4Doc.tsx?demo-path=${path}`;
      // const requirePath = `@/components/demo/PreviewerContainer4Doc.tsx`;
      // @ts-expect-error
      tree.children.splice(index, 1, {
        type: 'mdxJsxFlowElement',
        name: component,
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'previewer',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: `require('${requirePath}')`,
              data: {
                estree: {
                  type: 'Program',
                  body: [
                    {
                      type: 'ExpressionStatement',
                      expression: {
                        type: 'MemberExpression',
                        object: {
                          type: 'CallExpression',
                          callee: {
                            type: 'Identifier',
                            name: 'require',
                          },
                          arguments: [
                            {
                              type: 'Literal',
                              value: requirePath,
                              raw: `'${requirePath}'`,
                            },
                          ],
                          optional: false,
                        },
                        property: {
                          type: 'Identifier',
                          name: 'default',
                        },
                        computed: false,
                        optional: false,
                      },
                    },
                  ],
                  sourceType: 'module',
                  comments: [],
                },
              },
            },
          },
          // {
          //   type: 'mdxJsxAttribute',
          //   name: 'previewer',
          //   value: {
          //     type: 'mdxJsxAttributeValueExpression',
          //     value: `require('${requirePath}')`,
          //     data: {
          //       estree: {
          //         type: 'Program',
          //         body: [
          //           {
          //             type: 'ExpressionStatement',
          //             expression: {
          //               type: 'CallExpression',
          //               callee: {
          //                 type: 'Identifier',
          //                 name: 'require',
          //               },
          //               arguments: [
          //                 {
          //                   type: 'Literal',
          //                   value: requirePath,
          //                   raw: `'${requirePath}'`,
          //                 },
          //               ],
          //               optional: false,
          //             },
          //           },
          //         ],
          //         sourceType: 'module',
          //         comments: [],
          //       },
          //     },
          //   },
          // },
          {
            type: 'mdxJsxAttribute',
            name: 'entry',
            value: path,
          },
        ],
      });
    });

    const inlineRecords: InlineRecord[] = [];

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
        inlineRecords.push({ index: index, value: node.value });
      }
    });

    inlineRecords.forEach((item, index) => {
      // const requirePath = `!!@yike-design/mdx-demo/previewer-loader?demo-path=${currentFile}&inline=${index}!@/components/demo/PreviewerContainer4Doc.tsx`;
      const requirePath = `@/components/demo/PreviewerContainer4Doc.tsx?demo-path=${currentFile}&inline=${index}`;
      // const requirePath = `@/components/demo/PreviewerContainer4Doc.tsx`;
      // @ts-expect-error
      tree.children.splice(item.index, 1, {
        type: 'mdxJsxFlowElement',
        name: component,
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'previewer',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: `require('${requirePath}')`,
              data: {
                estree: {
                  type: 'Program',
                  body: [
                    {
                      type: 'ExpressionStatement',
                      expression: {
                        type: 'MemberExpression',
                        object: {
                          type: 'CallExpression',
                          callee: {
                            type: 'Identifier',
                            name: 'require',
                          },
                          arguments: [
                            {
                              type: 'Literal',
                              value: requirePath,
                              raw: `'${requirePath}'`,
                            },
                          ],
                          optional: false,
                        },
                        property: {
                          type: 'Identifier',
                          name: 'default',
                        },
                        computed: false,
                        optional: false,
                      },
                    },
                  ],
                  sourceType: 'module',
                  comments: [],
                },
              },
            },
          },
          {
            type: 'mdxJsxAttribute',
            name: 'inline',
            value: `demo${index}`,
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
        ],
      });
    });
  };
}
