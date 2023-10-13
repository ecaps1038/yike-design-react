import { Anchor } from '@yike-design/react';

export default () => {
  return (
    <div className="h-[10000px]">
      <div className="fixed z-10 bottom-10 right-0 p-4 w-52 rounded border border-yike-1 m-4">
        <Anchor
          items={[
            {
              title: '一级锚点-1',
              href: '#basic',
              children: [
                { title: '二级锚点1-1', href: '#basic-1' },
                { title: '二级锚点1-2', href: '#basic-2' },
              ],
            },
            {
              title: '一级锚点-2',
              href: '#static',
              children: [
                { title: '二级锚点2-1', href: '#static-1' },
                { title: '二级锚点2-2', href: '#static-2' },
              ],
            },
          ]}
        />
      </div>
      <div className="h-52" />
      <div className="h-52">
        <h2 id="basic">一级锚点-1</h2>
      </div>
      <div className="h-52">
        <h3 id="basic-1">二级锚点1-1</h3>
      </div>
      <div className="h-52">
        <h3 id="basic-2">二级锚点1-2</h3>
      </div>

      <div className="h-52">
        <h2 id="static">一级锚点-2</h2>
      </div>

      <div className="h-52">
        <h3 id="static-1">二级锚点2-1</h3>
      </div>
      <div className="h-52">
        <h3 id="static-2">二级锚点2-2</h3>
      </div>
    </div>
  );
};
