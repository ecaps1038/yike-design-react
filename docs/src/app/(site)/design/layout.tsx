import type React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import { getRouteLinks } from '@/utils/doc';

export const metadata: Metadata = {
  title: {
    template: '%s - Yike Design',
    default: '',
  },
};

const DesignLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const items = getRouteLinks('design');

  return <Layout items={items}>{children}</Layout>;
};

export default DesignLayout;
