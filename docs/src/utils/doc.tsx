import { notFound } from 'next/navigation';
import type { DocPageProps } from '@/types';
import { allDocs } from 'contentlayer/generated';

export const createGetDocFromSlug = (type: string) => {
  return (slug: string) => {
    return allDocs.find(doc => doc.dir === type && doc.slug === slug);
  };
};

export const createDocPage = (getDocFromSlug: ReturnType<typeof createGetDocFromSlug>) => {
  return async ({ params }: DocPageProps) => {
    const doc = getDocFromSlug(params.slug);
    if (!doc) {
      notFound();
    }
    const { default: Content } = await import(`@/content/${doc.path}`);
    return <Content />;
  };
};
