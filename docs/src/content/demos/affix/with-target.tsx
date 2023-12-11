import { useRef } from 'react';
import { Affix, Button } from '@yike-design/react';

export default () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: 200, overflowY: 'auto' }} ref={targetRef}>
      <div
        style={{
          height: 800,
          backgroundSize: '30px 30px',
          backgroundColor: 'rgb(242, 243, 245)',
          backgroundPosition: '0px 0px, 15px 15px',
          backgroundImage: `linear-gradient(45deg, rgb(255, 255, 255) 25%, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 75%, rgb(255, 255, 255) 0px), linear-gradient(45deg, rgb(255, 255, 255) 25%, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 75%, rgb(255, 255, 255) 0px)`,
        }}
      >
        <div style={{ height: 100 }} />
        <Affix offset={10} target={() => targetRef.current} targetContainer={() => window}>
          <Button>Affix top 10px in container</Button>
        </Affix>
      </div>
    </div>
  );
};
