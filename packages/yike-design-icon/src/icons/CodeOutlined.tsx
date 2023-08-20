/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CodeOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'code-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M320 315.6 120.9 514.7 320 713.86l-54.3 54.3L12.26 514.7 265.7 261.3l54.3 54.3zm384 0L903.1 514.7 704 713.86l54.3 54.3 253.44-253.45L758.3 261.3 704 315.6zm-98.56-203.4 72.63 25.02L411.34 911.8l-72.6-25.02z" />
          </svg>
        ),
      }}
    />
  );
});

export default CodeOutlined;
