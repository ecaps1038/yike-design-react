/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ArrowDownOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'arrow-down-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M550.4 51.2v771.1l178.82-178.82 54.32 54.3L512 969.32 240.46 697.78l54.32-54.3 178.8 178.82.02-771.1h76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default ArrowDownOutlined;
