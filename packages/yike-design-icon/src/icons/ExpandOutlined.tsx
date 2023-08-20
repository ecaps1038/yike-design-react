/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ExpandOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'expand-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M76.8 153.6h870.4v76.8H76.8zm0 320H640v76.8H76.8zM950.84 512l-54.3 54.3-126.72 126.72-54.3-54.3L842.22 512 715.48 385.28l54.33-54.3L950.84 512zM76.8 793.6h870.4v76.8H76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default ExpandOutlined;
