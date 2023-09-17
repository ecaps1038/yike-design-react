import type LeftAside from '@/components/LeftAside';
import type { HtmlElementNode } from '@jsdevtools/rehype-toc';

export type LeftAsideItems = Parameters<typeof LeftAside>[0]['items'];

export interface HTMLElementNode extends HtmlElementNode {
  children?: HTMLElementNode[];
}

export interface TOCData {
  text: string;
  href: string;
  children: TOCData[];
}

export interface DocPageProps {
  params: {
    slug: string;
  };
}
