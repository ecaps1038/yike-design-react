/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CrossOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'cross-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m792.58 177.13 54.3 54.27L566.3 512l280.55 280.58-54.27 54.3L512 566.3 231.42 846.85l-54.3-54.27L457.7 512 177.13 231.42l54.27-54.3L512 457.7l280.58-280.57z" />
          </svg>
        ),
      }}
    />
  );
});

export default CrossOutlined;
