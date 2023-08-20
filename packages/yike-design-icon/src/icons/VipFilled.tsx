/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const VipFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'vip-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m819.2 128 144.97 265.75a25.6 25.6 0 0 1-3.38 29.32L531.1 904.6a25.6 25.6 0 0 1-38.19 0L63.2 423.1a25.6 25.6 0 0 1-3.37-29.32L204.8 128h614.4zM394.09 435.2l-56.17 52.38 174.52 187.29 174.59-187.22-56.17-52.37L512.2 562.5 394.1 435.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default VipFilled;
