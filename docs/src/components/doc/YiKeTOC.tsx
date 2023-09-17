'use client';
import type React from 'react';
import { useEffect, useState } from 'react';
import { useScroll, useMap } from 'ahooks';
import type { TOCData } from '@/types';

interface TOCAnchorProps {
  anchor: TOCData;
}

const TOCAnchor = ({ anchor }: TOCAnchorProps) => {
  return (
    <div className="pl-3">
      <a
        className="text-sm leading-loose"
        href={anchor.href}
      >
        {anchor.text}
      </a>
      {anchor.children.map(item => (
        <TOCAnchor
          key={item.href}
          anchor={item}
        />
      ))}
    </div>
  );
};

interface YiKeTOCProps {
  toc: TOCData[];
}

const DEFAULT_POSITION = { left: 0, top: 0 };

const OFFSET_RANGE = 100;

interface AnchorRecord {
  id: string;
  order: number;
}

const YiKeTOC: React.FC<YiKeTOCProps> = ({ toc }) => {
  const position = useScroll(() => document.querySelector('#yike-doc-container') as HTMLElement) ?? DEFAULT_POSITION;
  const [offsets, setOffsets] = useState<number[]>([]);
  const [headOffsetMap, { setAll: setAllOffset }] = useMap<number, AnchorRecord>([]);

  const [order, setOrder] = useState(-1);

  // TODO: some bug to fix

  useEffect(() => {
    const heads = document.querySelectorAll<HTMLHeadElement>('h2, h3, h4, h5, h6');

    const headOffsetMap = Array.from(heads)
      .map(head => [head.offsetTop, head.id] as [number, string])
      .sort((a, b) => a[0] - b[0])
      .map(([offset, id], index) => [offset, { id, order: index }] as [number, AnchorRecord]);
    setAllOffset(headOffsetMap);
    setOffsets(headOffsetMap.map(([offset]) => offset));
  }, [setAllOffset]);

  useEffect(() => {
    const activeOffset = offsets.find(offset => position.top < offset && offset <= position.top + OFFSET_RANGE);

    if (activeOffset) {
      const activeAnchor = headOffsetMap.get(activeOffset);
      if (activeAnchor) {
        setOrder(activeAnchor.order);
      }
    }
  }, [position.top, headOffsetMap, offsets]);

  return (
    <div className="w-[133px] py-1 fixed right-1 top-20 overflow-hidden">
      <span className="absolute h-full w-0.5 bg-[#E8E8E8] left-0 top-0" />
      <span
        className="absolute w-0.5 h-5 my-1 bg-[#2B5AED] left-0 transition-top duration-300"
        style={{ top: order < 0 ? -99999 : 28 * order + 4 }}
      />
      {toc.map(anchor => (
        <TOCAnchor
          key={anchor.href}
          anchor={anchor}
        />
      ))}
    </div>
  );
};

export default YiKeTOC;
