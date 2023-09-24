import { existsSync } from 'fs';
import { basename, resolve } from 'path';
import { notFound } from 'next/navigation';
import { Typography } from '@yike-design/react';
import { getComponents, getDemos } from '../../utils';
import { COMPONENT_DEMOS_DIR, IS_DEV } from '@/utils/constants';
import PreviewerContainer from '@/components/demo/PreviewerContainer';

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

export const generateStaticParams = async () => {
  const components = await getComponents();

  return (
    await Promise.all(
      components.map(async item => {
        const demos = await getDemos(item.name);
        return demos.map(demo => ({
          component: item.name,
          demo: basename(demo.name, '.tsx'),
        }));
      })
    )
  ).flat();
};

const Page = async ({ params: { component, demo } }: PageProps) => {
  if (!existsSync(resolve(COMPONENT_DEMOS_DIR, component, `${demo}.tsx`))) {
    notFound();
  }

  if (IS_DEV) {
    return (
      <div className="p-4">
        <Typography.Title className="text-center">Yike Design React Demo</Typography.Title>
        <p className="leading-loose mb-4 text-center">
          <span className="font-bold mr-1">文件路径:</span>
          <Typography.Text underline>
            @/content/demos/{component}/{demo}.tsx
          </Typography.Text>
        </p>
        <div className="border border-yike p-4 rounded">
          <PreviewerContainer
            demo={demo}
            component={component}
          />
        </div>
      </div>
    );
  }

  return (
    <PreviewerContainer
      demo={demo}
      component={component}
    />
  );
};

export default Page;
