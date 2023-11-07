import React from 'react';
import LeftAside from './LeftAside';
import type { LeftAsideItems } from '@/types';

interface LayoutProps {
  items: LeftAsideItems;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ items, children }) => {
  return (
    <React.Fragment>
      <LeftAside items={items} />
      <div id="yike-doc-container" className="ml-aside pr-36 relative">
        <article className="px-14 py-6">{children}</article>
      </div>
    </React.Fragment>
  );
};

export default Layout;
