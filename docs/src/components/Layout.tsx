import type React from 'react';
import LeftAside from './LeftAside';
import type { LeftAsideItems } from '@/types';

interface LayoutProps {
  items: LeftAsideItems;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ items, children }) => {
  return (
    <div className="h-full flex">
      <LeftAside items={items} />
      <div id="yike-doc-container" className="h-full flex-grow overflow-y-auto pr-36 relative">
        <article className="px-14 py-6">{children}</article>
      </div>
    </div>
  );
};

export default Layout;
