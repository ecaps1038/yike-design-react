/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const RevokeOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'revoke-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M127.56 359.35H19.8L326.22 54.68l54.3 54.3L206.1 281.6H691.2c155.52 0 281.6 126.08 281.6 281.6v25.6c0 155.52-126.08 281.6-281.6 281.6h-512v-76.8h512A204.8 204.8 0 0 0 896 588.8v-25.6a204.8 204.8 0 0 0-204.8-204.8l-562.71-.03-.93.98z" />
          </svg>
        ),
      }}
    />
  );
});

export default RevokeOutlined;
