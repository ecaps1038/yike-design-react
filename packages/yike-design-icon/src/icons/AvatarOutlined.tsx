/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const AvatarOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'avatar-outlined',
        component: (
          <svg
            viewBox="0 0 40 40"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M20 2a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Zm0 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm14.85 31.84A15 15 0 0 0 20.3 24H20A15 15 0 0 0 5.15 36.84l-.02.16H2.11a18 18 0 0 1 35.78 0h-3.02l-.03-.16Z" />
          </svg>
        ),
      }}
    />
  );
});

export default AvatarOutlined;
