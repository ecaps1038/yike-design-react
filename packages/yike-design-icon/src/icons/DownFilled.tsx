/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const DownFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'down-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M888.32 323.2 531.97 768.61a25.6 25.6 0 0 1-39.94 0L135.68 323.17a25.6 25.6 0 0 1 19.97-41.57h712.7a25.6 25.6 0 0 1 19.97 41.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default DownFilled;
