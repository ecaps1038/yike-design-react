import { useRef } from 'react';
import { Anchor } from '@yike-design/react';
import { items, renderAnchorTitle } from './shared';

export default () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div
          ref={scrollContainerRef}
          className="h-56 flex-grow overflow-auto border border-yike-1"
        >
          {renderAnchorTitle(items)}
        </div>
        <div className="h-56 p-4 w-52 rounded border border-yike-1">
          <Anchor
            items={items}
            getContainer={() => scrollContainerRef.current!}
          />
        </div>
      </div>
    </div>
  );
};
