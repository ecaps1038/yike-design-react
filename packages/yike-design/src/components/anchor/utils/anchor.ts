import React from 'react';
import AnchorLink from '../AnchorLink';
import type { AnchorLinkProps } from '../interface';

export const HASH_REGEXP = /^#(\S+)$/;

type AnchorLinkElement = React.ReactElement<React.PropsWithChildren<AnchorLinkProps>>;

const isAnchorLinkElement = (node: React.ReactNode): node is AnchorLinkElement => {
  return React.isValidElement(node) && node.type === AnchorLink;
};

const getAllAnchorLinks = (children: React.ReactNode): React.ReactElement<AnchorLinkProps>[] => {
  return React.Children.toArray(children)
    .filter(item => isAnchorLinkElement(item))
    .map(item => [item as AnchorLinkElement, ...getAllAnchorLinks((item as AnchorLinkElement).props.children)])
    .flat();
};

export const getAllLinks = (children: React.ReactNode) => {
  const links = getAllAnchorLinks(children).map(item => item.props.href);
  return [...new Set(links)];
};
