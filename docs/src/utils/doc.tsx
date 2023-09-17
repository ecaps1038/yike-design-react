import { notFound } from 'next/navigation';
import type { DocPageProps } from '@/types';
import { allDocs } from 'contentlayer/generated';

export const createPage = (type: string) => {
  const docs = allDocs.filter(doc => doc.dir === type);
  const getDocFromSlug = (slug: string) => docs.find(doc => doc.slug === slug);

  const generateStaticParams = docs.map(({ slug }) => ({ slug }));

  const generateMetadata = ({ params }: DocPageProps) => {
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

  const Page = async ({ params }: DocPageProps) => {
    const doc = getDocFromSlug(params.slug);
    if (!doc) {
      notFound();
    }
    const { default: Content } = await import(`@/content/${doc.path}`);
    return <Content />;
  };

  return { generateStaticParams, generateMetadata, Page };
};

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
