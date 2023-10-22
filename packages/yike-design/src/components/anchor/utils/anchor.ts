import type { AnchorProps } from '../interface';

export const HASH_REGEXP = /^#(\S+)$/;

export const getAllLinks = (items?: AnchorProps['items']) => {
  if (!items?.length) {
    return [];
  }
  const links: string[] = [];
  items.forEach(item => {
    links.push(item.href);
    links.push(...getAllLinks(item.children));
  });
  return [...new Set(links)];
};
