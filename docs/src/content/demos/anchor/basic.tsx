import { Anchor } from '@yike-design/react';
import { items, renderAnchorTitle } from './shared';

export default () => {
  return (
    <div className="h-[10000px]">
      <div className="fixed z-10 bottom-10 right-0 p-4 w-52 rounded border border-yike-1 m-4">
        <Anchor>
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
      {renderAnchorTitle(items)}
    </div>
  );
};
