/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const AvatarFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'avatar-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 0 1 0-409.6zm0 486.4c237.18 0 432.54 179.2 457.98 409.6H54.02C79.46 716.8 274.82 537.6 512 537.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default AvatarFilled;
