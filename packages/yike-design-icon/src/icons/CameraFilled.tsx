/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CameraFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'camera-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M694.45 102.4a25.6 25.6 0 0 1 25.35 22.14l14.46 105.86H947.2a25.6 25.6 0 0 1 25.6 25.6v588.8a25.6 25.6 0 0 1-25.6 25.6H76.8a25.6 25.6 0 0 1-25.6-25.6V256a25.6 25.6 0 0 1 25.6-25.6h264.14l14.44-105.86a25.6 25.6 0 0 1 25.34-22.14h313.73zM512 345.6a192 192 0 1 0 0 384 192 192 0 0 0 0-384zm0 76.8a115.2 115.2 0 1 1 0 230.4 115.2 115.2 0 0 1 0-230.4zM128 115.2h153.6V192H128z" />
          </svg>
        ),
      }}
    />
  );
});

export default CameraFilled;
