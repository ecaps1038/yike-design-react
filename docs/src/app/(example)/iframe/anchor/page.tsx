'use client';
import { Anchor } from '@yike-design/react';

const AnchorExamplePage = () => {
  return (
    <div
      id="xxxxx"
      className="h-96 border overflow-auto"
    >
      <div className="h-[10000px]">
        <div className="fixed z-10 bottom-10 right-0 p-4 w-52 rounded border border-yike-1 m-4">
          <Anchor
            lineless
            getContainer={() => document.getElementById('xxxxx')!}
            items={[
              {
                title: '一级锚点',
                href: '#basic',
                children: [
                  { title: '二级锚点', href: '#basic-1' },
                  { title: '二级锚点', href: '#basic-2' },
                ],
              },
              {
                title: '一级锚点',
                href: '#static',
                children: [
                  { title: '二级锚点', href: '#static-1' },
                  { title: '二级锚点', href: '#static-2' },
                ],
              },
            ]}
          />
        </div>
        <div className="h-52" />
        <div className="h-52">
          <h2 id="basic">一级锚点</h2>
        </div>
        <div className="h-52">
          <h3 id="basic-1">一级锚点</h3>
        </div>
        <div className="h-52">
          <h3 id="basic-2">一级锚点</h3>
        </div>

        <div className="h-52">
          <h2 id="static">一级锚点</h2>
        </div>

        <div className="h-52">
          <h3 id="static-1">一级锚点</h3>
        </div>
        <div className="h-52">
          <h3 id="static-2">一级锚点</h3>
        </div>
      </div>
    </div>
  );
};

export default AnchorExamplePage;
