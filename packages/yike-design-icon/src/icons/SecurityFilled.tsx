/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const SecurityFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'security-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M513.18 25.6 896 128v614.4l-383.64 256L128 742.4V128L513.18 25.6zm202.88 254.72L462.62 533.76 335.9 407.04l-54.3 54.27 181.02 181.04 307.71-307.7-54.27-54.33z" />
          </svg>
        ),
      }}
    />
  );
});

export default SecurityFilled;
