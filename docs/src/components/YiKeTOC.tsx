'use client';
import type React from 'react';
import type { TOCData } from '@/types';
import { Anchor } from '@yike-design/react';

interface YiKeTOCProps {
  toc: TOCData[];
}

const transformTOC2AnchorLink = (toc: TOCData[]) => {
  return toc.map(item => (
    <Anchor.Link key={item.href} href={item.href} title={item.text}>
      {transformTOC2AnchorLink(item.children)}
    </Anchor.Link>
  ));
};

const YiKeTOC: React.FC<YiKeTOCProps> = ({ toc }) => {
  return (
    <div className="w-[133px] py-1 fixed right-1 top-20 overflow-hidden">
      <Anchor targetOffset={70}>{transformTOC2AnchorLink(toc)}</Anchor>
    </div>
  );
};

export default YiKeTOC;
