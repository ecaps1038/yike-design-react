import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';

interface PageProps {
  params: {
    slug: string;
  };
}

const DocPage = async ({ params }: PageProps) => {
  const { slug } = params;
  const doc = allDocs.find(doc => doc.dir === 'design' && doc.slug === slug);
  if (!doc) {
    notFound();
  }
  const { default: Content } = await import(`@/content/${doc.path}`);
  return <Content />;
};

export default DocPage;
