/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const RightFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'right-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m323.2 135.68 445.41 356.35a25.6 25.6 0 0 1 0 39.94L323.17 888.32a25.6 25.6 0 0 1-41.57-19.97v-712.7a25.6 25.6 0 0 1 41.6-19.97z" />
          </svg>
        ),
      }}
    />
  );
});

export default RightFilled;
