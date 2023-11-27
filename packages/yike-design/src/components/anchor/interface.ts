import type React from 'react';

export type AnchorContainer = HTMLElement | Window;

type AnchorClickEventHandler = (e: React.MouseEvent<HTMLAnchorElement>, link: AnchorLinkProps) => void;

export interface YKAnchorContext {
  activeLink?: string;
  onClick?: AnchorClickEventHandler;
  scrollTo: (link: string) => void;
}

export interface AnchorLinkProps {
  href: string;
  title: React.ReactNode;
  className?: string;
}

export interface AnchorItem extends AnchorLinkProps {
  children?: AnchorItem[];
}

export interface AnchorProps {
  // TODO: affix
  lineless?: boolean;
  bounds?: number;
  offsetTop?: number;
  targetOffset?: number;
  getContainer?: () => HTMLElement | Window;
  onClick?: AnchorClickEventHandler;
  onChange?: (link: string) => void;
  className?: string;
}
