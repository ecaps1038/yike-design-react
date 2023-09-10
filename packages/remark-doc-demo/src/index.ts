import type { Node } from 'unist';
import type { Transformer } from 'unified';
import { visit } from 'unist-util-visit';
import transformCode from './transformCode.js';

export interface MDNode extends Node {
  lang?: string;
  meta: null | string;
  value: string;
}

interface Options {
  component: string;
}

export default function remarkDemoPlugin({ component }: Options): Transformer {
  return tree => {
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
