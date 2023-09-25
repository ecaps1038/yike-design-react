'use client';
import type React from 'react';
import dynamic from 'next/dynamic';
import { IS_PRODUCTION } from '@/utils/constants';
import DemoErrorBoundary from './DemoErrorBoundary';
import { LoadingOutlined } from '@yike-design/react-icons';

interface ContainerProps {}

const PreviewerContainer: React.FC<ContainerProps> = () => {
  // @ts-ignore
  const Component = dynamic(() => import('__PREVIEWER_DEMO_PATH__'), {
    ssr: IS_PRODUCTION,
    loading: () => <LoadingOutlined className="animate-spin text-xl" />,
  });
  return (
    <DemoErrorBoundary>
      <Component />
    </DemoErrorBoundary>
  );
};

export default PreviewerContainer;
