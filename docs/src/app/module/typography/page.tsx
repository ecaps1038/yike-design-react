'use client';
import { useEffect, useRef } from 'react';
import { Typography } from '@yike-design/react';
const Page = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <div>
      <Typography.Title
        ref={ref}
        ellipsis={{ rows: 2, expandable: true, onEllipsis: ellipsis => console.log('onEllipsis', ellipsis) }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque enim tempora nisi est quia architecto tenetur
        deserunt, molestias praesentium ipsam asperiores repellendus natus nemo magnam, laboriosam rem! Mollitia,
        voluptatibus esse!
      </Typography.Title>
    </div>
  );
};

export default Page;
