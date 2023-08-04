import { Node } from 'unist'
import { resolve } from 'path'
import { Transformer } from 'unified'
import { visit } from 'unist-util-visit'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

export interface MDASTCode extends Node {
  lang?: string;
  meta: null | string;
  value: string;
}

let index = 0

export default function rehypeDemoPlugin(): Transformer {
  return (tree, file) => {
    const dirPath = resolve(file.cwd, 'node_modules/yike')
    existsSync(dirPath) || mkdirSync(dirPath)
    visit(tree, 'code', (node: MDASTCode) => {
      if (node.lang === 'tsx' && !node.meta) {
        const current = `yike-demo-${index++}`
        writeFileSync(resolve(dirPath, `${current}.tsx`), node.value, 'utf-8')
        node.data = {
          hName: 'YiKeDemo',
          hProperties: {
            id: current
          }
        }
      } 
    })
  }
}