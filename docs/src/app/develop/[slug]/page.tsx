import type { DocPageProps } from '@/types';
import { allDocs } from 'contentlayer/generated';
import { createDocPage, createGetDocFromSlug } from '@/utils/doc';

const getDocFromSlug = createGetDocFromSlug('develop');

export const generateStaticParams = async () => {
  return allDocs.map(doc => ({
    slug: doc.slug,
  }));
};

export const generateMetadata = ({ params }: DocPageProps) => {
  const doc = getDocFromSlug(params.slug);
  if (!doc) {
    return {
      title: 'Not found',
      description: '',
    };
  }
  return {
    title: doc.title ?? doc.slug,
    description: doc.description,
  };
};

export default createDocPage(getDocFromSlug);
