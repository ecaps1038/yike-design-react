'use client';
import type React from 'react';
import type { TOCData } from '@/types';
import { Anchor } from '@yike-design/react';

interface YiKeTOCProps {
  toc: TOCData[];
}

const transformTOC2AnchorItems = (toc: TOCData[]): any => {
  return toc.map(item => ({
    title: item.text,
    href: item.href,
    children: transformTOC2AnchorItems(item.children),
  }));
};

const YiKeTOC: React.FC<YiKeTOCProps> = ({ toc }) => {
  return (
    <div className="w-[133px] py-1 fixed right-1 top-20 overflow-hidden">
      <Anchor items={transformTOC2AnchorItems(toc)} />
    </div>
  );
};

export default YiKeTOC;
