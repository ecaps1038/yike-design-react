import type { HtmlElementNode } from '@jsdevtools/rehype-toc';

export interface HTMLElementNode extends HtmlElementNode {
  children?: HTMLElementNode[];
}

// export interface
