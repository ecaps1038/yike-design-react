import { globSync } from 'glob';
import matter from 'gray-matter';
import groupby from 'lodash.groupby';
import { readFileSync } from 'node:fs';
import { notFound } from 'next/navigation';
import { basename, dirname, relative, resolve } from 'node:path';

import { DOCS_DIR } from './constants';
import type { DocPageProps } from '@/types';
import All_DOC_GROUPS from '@/doc-groups.json';

const allDocuments = groupby(
  globSync(resolve(DOCS_DIR, '**/*.mdx')).map(path => {
    const docMatter = matter(readFileSync(path, 'utf-8'));

    const { data: meta } = docMatter;

    const { title = basename(path, '.mdx'), description, category = '', order = Infinity, label = title } = meta;

    return {
      file: relative(DOCS_DIR, path),
      route: basename(dirname(path)),
      slug: basename(path, '.mdx'),
      meta: {
        title,
        description,
        category,
        order,
        label,
      },
    };
  }),
  item => item.route
);

type Route = {
  link: string;
  category: string;
  order: number;
  label: string;
};

type Dictionary<T extends object> = ReturnType<typeof groupby<T>>;

type DocGroupRoutes = Record<string, Dictionary<Route[]>>;

export const allDocGroupRoutes: DocGroupRoutes = Object.keys(allDocuments).reduce((memo, type) => {
  const docs = allDocuments[type];
  memo[type] = groupby(
    docs
      .map(doc => ({
        link: `/${doc.route}/${doc.slug}`,
        category: doc.meta.category,
        order: doc.meta.order,
        label: doc.meta.label,
      }))
      .sort((a, b) => a.order - b.order),
    item => item.category
  );
  return memo;
}, {} as DocGroupRoutes);

function assertDocDefineType(type: string): asserts type is keyof typeof All_DOC_GROUPS {
  if (!(type in All_DOC_GROUPS)) {
    throw new Error(`Invalid Doc type: ${type}, please check the doc-groups.json`);
  }
}

export const getRouteLinks = (type: string) => {
  const groupRoutes = allDocGroupRoutes[type];
  if (!groupRoutes) {
    return [];
  }
  try {
    assertDocDefineType(type);

    const currentGroup = All_DOC_GROUPS[type];

    const groupKeysOrder = currentGroup.map(group => group.key);

    return Object.keys(groupRoutes)
      .filter(groupKey => {
        const includes = groupKeysOrder.includes(groupKey);
        if (!includes) {
          console.warn('Invalid groupKey: ', groupKey);
        }
        return includes;
      })
      .sort((a, b) => groupKeysOrder.indexOf(a) - groupKeysOrder.indexOf(b))
      .map(groupKey => {
        const group = currentGroup.find(item => item.key === groupKey)!;
        const routes = groupRoutes[groupKey] as Route[];
        const title = group.text;
        return {
          title,
          children: routes.map(({ link, label }) => ({ text: label, link })),
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.warn((error as Error).message);
    return [];
  }
};

export const createPage = (type: string) => {
  const docs = allDocuments[type];

  const getDocFromSlug = (slug: string) => docs.find(doc => doc.slug === slug);

  const generateStaticParams = () => docs.map(({ slug }) => ({ slug }));

  const generateMetadata = ({ params }: DocPageProps) => {
    const doc = getDocFromSlug(params.slug);
    if (!doc) {
      return {};
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
