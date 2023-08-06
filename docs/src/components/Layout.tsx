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
      <div className="h-full flex-grow px-14 py-6 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
