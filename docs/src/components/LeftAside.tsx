'use client';
import clsx from 'clsx';
import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftAsideLink {
  text: string;
  link: string;
}

interface LeftAsideItem {
  title: string;
  children: LeftAsideLink[];
}

interface LeftAsideProps {
  items: LeftAsideItem[];
}

const LeftAside: React.FC<LeftAsideProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="w-aside border-r h-aside fixed top-header border-yike-1 overflow-y-auto py-2 px-4">
      {items.map((item, index) => (
        <div key={index} className="pt-4">
          <div className="text-sm font-bold h-10 leading-10">{item.title}</div>
          {item.children.map(({ text, link }) => (
            <Link
              key={link}
              href={link}
              className={clsx(
                'block text-sm px-4 h-10 leading-10 mb-1 rounded-lg transition-colors duration-300 hover:bg-primary-1',
                {
                  'bg-primary-1 font-semibold text-primary': pathname === link,
                }
              )}
            >
              {text}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftAside;
