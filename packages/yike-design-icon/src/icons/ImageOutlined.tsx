/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ImageOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'image-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M921.6 76.8a25.6 25.6 0 0 1 25.6 25.6v819.2a25.6 25.6 0 0 1-25.6 25.6H102.4a25.6 25.6 0 0 1-25.6-25.6V102.4a25.6 25.6 0 0 1 25.6-25.6h819.2zM292.17 500.43 153.6 599.24V870.4h716.8v-27.19l-229.81-204.6L501.7 752.65 292.17 500.48zM870.4 153.6H153.6v351.33L305.66 396.5 512 644.81 642.64 537.6 870.4 740.38V153.6zm-204.8 76.8a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 76.8a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4z" />
          </svg>
        ),
      }}
    />
  );
});

export default ImageOutlined;
