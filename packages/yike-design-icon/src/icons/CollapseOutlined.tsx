/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CollapseOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'collapse-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M76.8 153.6h870.4v76.8H76.8zm307.2 320h563.2v76.8H384zM76.8 512l54.3 54.3h.02l126.72 126.72 54.28-54.3L185.42 512l126.72-126.72-54.32-54.3L76.8 512zm0 281.6h870.4v76.8H76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default CollapseOutlined;
