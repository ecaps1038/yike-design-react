/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CameraOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'camera-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M694.45 128a25.6 25.6 0 0 1 25.35 22.14L734.26 256H947.2a25.6 25.6 0 0 1 25.6 25.6v588.8a25.6 25.6 0 0 1-25.6 25.6H76.8a25.6 25.6 0 0 1-25.6-25.6V281.6A25.6 25.6 0 0 1 76.8 256h264.14l14.44-105.86A25.6 25.6 0 0 1 380.72 128h313.73zm-44.7 76.8H425.42L408 332.8H128v486.4h768V332.8H667.19l-17.44-128zM512 384a179.2 179.2 0 1 1 0 358.4 179.2 179.2 0 0 1 0-358.4zm0 76.8a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8zm-230.4-320v76.8H128v-76.8h153.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default CameraOutlined;
