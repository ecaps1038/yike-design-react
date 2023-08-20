/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const UpFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'up-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m135.68 700.8 356.35-445.41a25.6 25.6 0 0 1 39.94 0l356.35 445.44a25.6 25.6 0 0 1-19.97 41.57h-712.7a25.6 25.6 0 0 1-19.97-41.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default UpFilled;
