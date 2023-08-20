/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const BroadcastFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'broadcast-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M51.2 691.2V332.8h179.2l371.46-208.95A25.6 25.6 0 0 1 640 146.18v731.64a25.6 25.6 0 0 1-38.14 22.33L230.4 691.2H51.2zm742.4-217.6h179.2v76.8H793.6zm-59.03-214.53 162.4-75.75 32.46 69.63-162.4 75.73zm0 505.86 162.4 75.75 32.46-69.63-162.4-75.73z" />
          </svg>
        ),
      }}
    />
  );
});

export default BroadcastFilled;
