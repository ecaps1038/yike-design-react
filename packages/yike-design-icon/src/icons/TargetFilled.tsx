/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const TargetFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'target-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm0 230.4a230.4 230.4 0 1 0 0 460.8 230.4 230.4 0 0 0 0-460.8zm0 153.6a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default TargetFilled;
