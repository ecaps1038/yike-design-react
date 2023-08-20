/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const LikeOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'like-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M76.8 921.6V384h209L467.56 72.01a25.6 25.6 0 0 1 34.81-9.34l140.06 80.1a25.6 25.6 0 0 1 11.14 31.54l-61.85 158.18h348.57a25.6 25.6 0 0 1 24.88 31.62L835.3 902a25.6 25.6 0 0 1-24.88 19.59H76.8zm179.17-460.8H153.6v384h102.37v-384zm252.37-306.25L332.8 455.85V844.8h437.27l105.17-435.5H479.2l86.73-221.8-57.6-32.95z" />
          </svg>
        ),
      }}
    />
  );
});

export default LikeOutlined;
