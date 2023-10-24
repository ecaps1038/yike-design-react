import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s - Yike Design React',
    default: '',
  },
};

const Layout = ({ children }: React.PropsWithChildren) => {
  return children;
};

export default Layout;
