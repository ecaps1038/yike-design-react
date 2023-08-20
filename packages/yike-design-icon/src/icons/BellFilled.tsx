/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const BellFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'bell-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M102.4 844.8V768h102.4V435.2c0-156.67 117.25-285.95 268.8-304.82V51.2h76.8v79.18c151.55 18.87 268.8 148.15 268.8 304.82V768h102.4v76.8H102.4zM384 896h256v76.8H384z" />
          </svg>
        ),
      }}
    />
  );
});

export default BellFilled;
