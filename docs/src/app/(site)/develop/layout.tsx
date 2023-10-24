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

const DevelopLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const items = getRouteLinks('develop');

  return <Layout items={items}>{children}</Layout>;
};

export default DevelopLayout;
