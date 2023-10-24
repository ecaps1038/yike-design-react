import { Anchor } from '@yike-design/react';
import { items, renderAnchorTitle } from './shared';

export default () => {
  return (
    <div className="h-[10000px]">
      <div className="fixed z-10 bottom-10 right-0 p-4 w-52 rounded border border-yike-1 m-4">
        <Anchor
          lineless
          items={items}
        />
      </div>
      {renderAnchorTitle(items)}
    </div>
  );
};
