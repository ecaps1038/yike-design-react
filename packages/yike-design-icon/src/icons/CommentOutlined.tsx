/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CommentOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'comment-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M947.2 128a25.6 25.6 0 0 1 25.6 25.6v640a25.6 25.6 0 0 1-25.6 25.6H484.04L297.42 965.86A25.6 25.6 0 0 1 256 945.74V819.2H76.8a25.6 25.6 0 0 1-25.6-25.6v-640A25.6 25.6 0 0 1 76.8 128h870.4zM896 204.8H128v537.6h204.8v97.97l124.67-97.97H896V204.8zM563.2 537.6v76.8H256v-76.8h307.2zM768 332.8v76.8H256v-76.8h512z" />
          </svg>
        ),
      }}
    />
  );
});

export default CommentOutlined;
