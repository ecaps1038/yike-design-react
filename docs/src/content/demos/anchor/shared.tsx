import React from 'react';
import type { AnchorItem } from '@yike-design/react';

export const items = [
  {
    title: '一级锚点-1',
    href: '#basic-1',
    children: [
      { title: '二级锚点1-1', href: '#basic-1-1' },
      { title: '二级锚点1-2', href: '#basic-1-2' },
    ],
  },
  {
    title: '一级锚点-2',
    href: '#basic-2',
    children: [
      { title: '二级锚点2-1', href: '#basic-2-1' },
      { title: '二级锚点2-2', href: '#basic-2-2' },
    ],
  },
];

export const renderAnchorTitle = (items: AnchorItem[]) => {
  return (
    <React.Fragment>
      <div className="h-20" />
      {items.map(item => (
        <React.Fragment key={item.href}>
          <div className="h-56">
            <h2 id={item.href.slice(1)}>{item.title}</h2>
          </div>
          {item.children?.map(item => (
            <div key={item.href} className="h-56">
              <h3 id={item.href.slice(1)}>{item.title}</h3>
            </div>
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
