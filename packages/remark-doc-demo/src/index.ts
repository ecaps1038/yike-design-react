import type { Node } from 'unist';
import type { Transformer } from 'unified';
import { visit } from 'unist-util-visit';
import transformCode from './transformCode.js';
import { resolve } from 'path';

export interface MDNode extends Node {
  lang?: string;
  meta: null | string;
  value: string;
}

interface Options {
  component: string;
}

const DEMO_DIR = resolve(process.cwd(), 'src/content/demos');

export default function remarkDemoPlugin({ component }: Options): Transformer {
  return async tree => {
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
            index: index + toAddImports.length,
            dependencies,
          });
        }
      }
    });

    toAddImports.forEach(({ path, index }, importIndex) => {
      const ComponentName = `Demo${importIndex}`;

      // @ts-expect-error
      tree.children.splice(index, 0, {
        type: 'mdxjsEsm',
        value: `import ${ComponentName} from '${path}'`,
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
                      name: ComponentName,
                    },
                  },
                ],
                source: {
                  type: 'Literal',
                  value: path,
                  raw: `'${path}'`,
                },
              },
            ],
            sourceType: 'module',
          },
        },
      });

      // @ts-expect-error
      tree.children.splice(index + 1, 1, {
        type: 'mdxJsxFlowElement',
        name: 'DemoContainer',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'previewer',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: `<${ComponentName} />`,
              data: {
                estree: {
                  type: 'Program',
                  body: [
                    {
                      type: 'ExpressionStatement',
                      expression: {
                        type: 'JSXElement',
                        openingElement: {
                          type: 'JSXOpeningElement',
                          attributes: [],
                          name: {
                            type: 'JSXIdentifier',
                            name: ComponentName,
                          },
                          selfClosing: true,
                        },
                        closingElement: null,
                        children: [],
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
            name: 'entry',
            value: path.replace('~demos', DEMO_DIR),
          },
        ],
      });
    });

    // if (vFile.history[0].includes('button')) {
    //   console.log(JSON.stringify(toAddImports, null, 2));
    //   fs.writeFileSync('example.json', JSON.stringify(tree, null, 2), 'utf-8');
    // }

    // ast has no pre element
    visit(tree, 'code', (node: MDNode) => {
      if (node.meta === 'pure') {
        node.data = {
          hProperties: {
            lang: node.lang,
            pure: true,
          },
        };
      } else {
        // the reason use transformCode in this package is using @babel/traverse in nextjs will cause error:
        // Return statement is not allowed here
        const [error, liveCode] = transformCode(node.value);

        node.data = {
          hName: component,
          hProperties: {
            lang: node.lang,
            error: error?.toString(),
            liveCode,
          },
        };
      }
    });
  };
}
