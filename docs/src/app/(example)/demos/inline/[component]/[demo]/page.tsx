import { notFound } from 'next/navigation';
import { getAllDemos } from '../../utils';
import { IS_DEV } from '@/utils/constants';
import { Typography } from '@yike-design/react';
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

  if (IS_DEV) {
    return (
      <div className="p-4">
        <Typography.Title className="text-center">Yike Design React Demo</Typography.Title>
        <div className="border border-yike-1 p-4 rounded">
          <PreviewerContainer
            inline
            demo={demo}
            component={component}
          />
        </div>
      </div>
    );
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
