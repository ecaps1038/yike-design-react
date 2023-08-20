/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ShareFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'share-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M627.2 171.26a25.6 25.6 0 0 1 16.77 6.25l319.3 276.74a25.6 25.6 0 0 1 0 38.7L643.98 769.7a25.6 25.6 0 0 1-42.37-19.35V614.4H435.2c-167.99 0-310.78 107.88-362.9 258.12A408.93 408.93 0 0 1 51.2 742.4c0-226.23 183.37-409.6 409.6-409.6h140.8V196.86a25.6 25.6 0 0 1 25.6-25.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default ShareFilled;
