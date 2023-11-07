import { useRef } from 'react';
import { Affix, Button } from '@yike-design/react';

export default () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: 200, overflowY: 'auto' }}>
      <div
        ref={targetRef}
        style={{
          height: 800,
          backgroundPosition: '0px 0px, 15px 15px',
          backgroundSize: '30px 30px',
          backgroundImage:
            'linear-gradient(45deg, rgb(255, 255, 255) 25%, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 75%, rgb(255, 255, 255) 0px), linear-gradient(45deg, rgb(255, 255, 255) 25%, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 75%, rgb(255, 255, 255) 0px)',
        }}
      >
        <Affix offset={10} target={() => targetRef.current ?? window}>
          <Button>in container</Button>
        </Affix>
      </div>
    </div>
  );
};
