/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const MoonFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'moon-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M644.5 70.53C834.4 127.49 972.8 303.56 972.8 512c0 254.49-206.31 460.8-460.8 460.8-222.41 0-408.01-157.57-451.28-367.13A433.49 433.49 0 0 0 230.4 640c240.36 0 435.2-194.84 435.2-435.2 0-44.21-6.58-86.86-18.84-127.05z" />
          </svg>
        ),
      }}
    />
  );
});

export default MoonFilled;
