'use client';
import { Typography } from '@yike-design/react';
const page = () => {
  return (
    <div>
      <Typography.Base
        type="paragraph"
        ellipsis={{ rows: 2, expandable: true }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque enim tempora nisi est quia architecto tenetur
        deserunt, molestias praesentium ipsam asperiores repellendus natus nemo magnam, laboriosam rem! Mollitia,
        voluptatibus esse!
      </Typography.Base>

      {/* <Typography.Ellipsis
        rows={2}
        width={800}
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque enim tempora nisi est quia architecto teneturdeserunt, molestias praesentium ipsam asperiores repellendus natus nemo magnam, laboriosam rem! Mollitia,voluptatibus esse!"
      /> */}
    </div>
  );
};

export default page;
