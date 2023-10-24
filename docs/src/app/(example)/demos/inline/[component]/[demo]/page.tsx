import { notFound } from 'next/navigation';
import { getAllDemos } from '../../utils';
import PreviewerContainer from '@/components/demo/PreviewerContainer';

const ALL_DEMOS = await getAllDemos();

interface PageProps {
  params: {
    component: string;
    demo: string;
  };
}

export const generateMetadata = ({ params }: PageProps) => {
  return {
    title: `${params.demo} / ${params.component}`,
  };
};

export const generateStaticParams = () => {
  return ALL_DEMOS;
};

const Page = ({ params: { component, demo } }: PageProps) => {
  if (!ALL_DEMOS.find(d => d.component === component && d.demo === demo)) {
    notFound();
  }

  return (
    <PreviewerContainer
      inline
      demo={demo}
      component={component}
    />
  );
};

export default Page;
