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
  iframe: boolean;
}

interface InlineRecord {
  index: number;
  value: string;
  iframe: boolean;
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
        const iframeAttr = node.attributes.find((attr: any) => attr.name === 'iframe');
        if (srcAttr) {
          const path = srcAttr.value as string;
          externalRecords.push({
            path,
            index,
            iframe: iframeAttr && iframeAttr.value === null ? true : false,
          });
        }
      }
    });

    externalRecords.forEach(({ path, index, iframe }) => {
      // @ts-expect-error
      tree.children.splice(index, 1, {
        type: 'mdxJsxFlowElement',
        name: component,
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'entry',
            value: path,
          },
          {
            type: 'mdxJsxAttribute',
            name: 'iframe',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: `${iframe}`,
              data: {
                estree: {
                  type: 'Program',
                  body: [
                    {
                      type: 'ExpressionStatement',
                      expression: {
                        type: 'Literal',
                        value: iframe,
                        raw: `${iframe}`,
                      },
                    },
                  ],
                  sourceType: 'module',
                  comments: [],
                },
              },
            },
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
        inlineRecords.push({ index: index, value: node.value, iframe: node.meta === 'iframe' });
      }
    });

    inlineRecords.forEach((item, index) => {
      // @ts-expect-error
      tree.children.splice(item.index, 1, {
        type: 'mdxJsxFlowElement',
        name: component,
        attributes: [
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
          {
            type: 'mdxJsxAttribute',
            name: 'iframe',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: `${item.iframe}`,
              data: {
                estree: {
                  type: 'Program',
                  body: [
                    {
                      type: 'ExpressionStatement',
                      expression: {
                        type: 'Literal',
                        value: item.iframe,
                        raw: `${item.iframe}`,
                      },
                    },
                  ],
                  sourceType: 'module',
                  comments: [],
                },
              },
            },
          },
        ],
      });
    });
  };
}
