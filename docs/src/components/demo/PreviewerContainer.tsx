'use client';
import type React from 'react';
import dynamic from 'next/dynamic';
import DemoErrorBoundary from './DemoErrorBoundary';
import { LoadingOutlined } from '@yike-design/react-icons';

interface ContainerProps {
  inline?: boolean;
  demo: string;
  component: string;
}

const PreviewerContainer: React.FC<ContainerProps> = ({ inline = false, component, demo }) => {
  const Component = dynamic(
    inline
      ? () =>
          import(`!!@yike-design/mdx-demo/inline-loader!@/content/docs/components/${component}.mdx`).then(mod =>
            mod[demo]()
          )
      : () => import(`@/content/demos/${component}/${demo}.tsx`),
    {
      ssr: false,
      loading: () => <LoadingOutlined className="animate-spin text-xl" />,
    }
  );
  return (
    <DemoErrorBoundary>
      <Component />
    </DemoErrorBoundary>
  );
};

export default PreviewerContainer;
