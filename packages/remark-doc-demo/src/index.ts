import type { Node } from 'unist';
import path, { relative } from 'path';
import type { Transformer } from 'unified';
import { visit } from 'unist-util-visit';

export interface MDASTCode extends Node {
  lang?: string;
  meta: null | string;
  value: string;
}

interface Options {
  component: string;
  onResolve: (file: string, id: string, source: string) => void;
}

export default function remarkDemoPlugin({ component, onResolve }: Options): Transformer {
  return (tree, file) => {
    let index = 0;
    const currentFile = file.history[0];
    const parsed = path.parse(relative(file.cwd, currentFile));
    const currentDir = `${parsed.dir}/${parsed.name}`.split('/').join('-');
    // ast has no pre element
    visit(tree, 'code', (node: MDASTCode) => {
      if (node.lang === 'tsx' && !node.meta) {
        const current = `${currentDir}-${index++}`;
        onResolve(file.history[0], current, node.value);
        node.data = {
          hName: component,
          hProperties: {
            lang: node.lang,
            path: current,
          },
        };
      } else if (node.meta === 'pure') {
        node.data = {
          hProperties: {
            lang: node.lang,
            pure: true,
          },
        };
      }
    });
  };
}
