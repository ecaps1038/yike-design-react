import { useRef } from 'react';
import { Anchor } from '@yike-design/react';
import { items, renderAnchorTitle } from './shared';

export default () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div ref={scrollContainerRef} className="h-56 flex-grow overflow-auto border border-yike-1">
          {renderAnchorTitle(items)}
        </div>
        <div className="h-56 p-4 w-52 rounded border border-yike-1">
          <Anchor getContainer={() => scrollContainerRef.current!}>
            <Anchor.Link href="#basic-1" title="一级锚点-1">
              <Anchor.Link href="#basic-1-1" title="二级锚点1-1" />
              <Anchor.Link href="#basic-1-2" title="二级锚点1-2" />
            </Anchor.Link>
            <Anchor.Link href="#basic-2" title="一级锚点-2">
              <Anchor.Link href="#basic-2-1" title="二级锚点2-1" />
              <Anchor.Link href="#basic-2-2" title="二级锚点2-2" />
            </Anchor.Link>
          </Anchor>
        </div>
      </div>
    </div>
  );
};
