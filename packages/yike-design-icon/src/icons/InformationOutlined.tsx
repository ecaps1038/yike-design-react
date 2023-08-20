/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const InformationOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'information-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 76.8c254.49 0 460.8 183.37 460.8 409.6S766.49 896 512 896c-42.42 0-83.5-5.1-122.52-14.64l-174.44 75.88a25.6 25.6 0 0 1-35.84-23.48V769.72c-79.28-73.58-128-173.4-128-283.32C51.2 260.17 257.51 76.8 512 76.8zm0 76.8c-213.96 0-384 151.14-384 332.8 0 85.04 37.07 165.43 103.42 227.02L256 736.2v119.45l126.6-55.04 25.13 6.15A438.84 438.84 0 0 0 512 819.2c213.96 0 384-151.14 384-332.8S725.96 153.6 512 153.6zm0 409.6V640H281.6v-76.8H512zm230.4-204.8v76.8H281.6v-76.8h460.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default InformationOutlined;
