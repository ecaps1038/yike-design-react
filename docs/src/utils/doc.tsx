import { globSync } from 'glob';
import matter from 'gray-matter';
import groupby from 'lodash.groupby';
import { readFileSync } from 'node:fs';
import { notFound } from 'next/navigation';
import { basename, dirname, relative, resolve } from 'node:path';

import { DOCS_DIR } from './constants';
import type { DocPageProps } from '@/types';

const allDocuments = groupby(
  globSync(resolve(DOCS_DIR, '**/*.mdx')).map(path => {
    const docMatter = matter(readFileSync(path, 'utf-8'));

    const title = docMatter.data.title ?? basename(path, '.mdx');

    const description = docMatter.data.description;

    return {
      file: relative(DOCS_DIR, path),
      route: basename(dirname(path)),
      slug: basename(path, '.mdx'),
      meta: {
        title,
        description,
      },
    };
  }),
  item => item.route
);

export const createPage = (type: string) => {
  const docs = allDocuments[type];

  const getDocFromSlug = (slug: string) => docs.find(doc => doc.slug === slug);

  const generateStaticParams = () => docs.map(({ slug }) => ({ slug }));

  const generateMetadata = ({ params }: DocPageProps) => {
    const doc = getDocFromSlug(params.slug);
    if (!doc) {
      notFound();
    }
    return {
      title: doc.meta.title,
      description: doc.meta.description,
    };
  };

  const Page = async ({ params }: DocPageProps) => {
    const doc = getDocFromSlug(params.slug);

    if (!doc) {
      notFound();
    }

    const { default: Content } = await import(`@/content/docs/${doc.route}/${doc.slug}.mdx`);
    return <Content />;
  };

  return { generateStaticParams, generateMetadata, Page };
};
