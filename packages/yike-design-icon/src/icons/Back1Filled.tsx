/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const Back1Filled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'back-1-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m448 499.2-409.6-192 409.6-192V256h217.6c169.65 0 307.2 126.98 307.2 283.57v47.26c0 156.62-137.55 283.57-307.2 283.57h-512v-98.48h512c113.1 0 204.8-83.05 204.8-185.53v-46.38c0-102.48-91.7-185.55-204.8-185.55H448V499.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default Back1Filled;
