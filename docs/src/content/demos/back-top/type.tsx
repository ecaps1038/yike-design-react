import { useRef } from 'react';
import { BackTop } from '@yike-design/react';

export default () => {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <BackTop style={{ position: 'absolute' }} type="secondary" target={() => targetRef.current!} />
      <div ref={targetRef} className="overflow-auto h-[300px]">
        <ul className="px-10 list-decimal">
          {new Array(50).fill(0).map((_, index) => (
            <li key={index} className="py-3">
              this is content
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
