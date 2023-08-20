/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const BellOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'bell-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M102.4 844.8V768h102.4V435.2c0-156.67 117.25-285.95 268.8-304.82V51.2h76.8v79.18c151.55 18.87 268.8 148.15 268.8 304.82V768h102.4v76.8H102.4zm409.6-640a230.4 230.4 0 0 0-230.4 230.4V768h460.8V435.2a230.4 230.4 0 0 0-223.62-230.3l-6.78-.1zM384 896h256v76.8H384z" />
          </svg>
        ),
      }}
    />
  );
});

export default BellOutlined;
