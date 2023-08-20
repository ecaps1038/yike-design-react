/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const LikeFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'like-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m513.36 73.68.4.25 95.6 60.09a25.6 25.6 0 0 1 10.24 30.87L545.02 358.4h394.91a25.6 25.6 0 0 1 24.83 31.87l-129.28 512a25.6 25.6 0 0 1-24.83 19.33H281.6V408.86L478.2 82.38a25.6 25.6 0 0 1 35.16-8.7zM76.8 409.6h128v512h-128z" />
          </svg>
        ),
      }}
    />
  );
});

export default LikeFilled;
