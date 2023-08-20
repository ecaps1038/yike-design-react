/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ShutdownOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'shutdown-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M358.4 130.28v83.4C237.31 271.21 153.6 394.62 153.6 537.6 153.6 735.54 314.06 896 512 896s358.4-160.46 358.4-358.4c0-142.98-83.71-266.37-204.8-323.9v-83.42c164.58 62.1 281.6 221.03 281.6 407.32 0 240.36-194.84 435.2-435.2 435.2S76.8 777.96 76.8 537.6c0-186.3 117.04-345.24 281.6-407.32zm192-79.08v563.2h-76.8V51.2h76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default ShutdownOutlined;
