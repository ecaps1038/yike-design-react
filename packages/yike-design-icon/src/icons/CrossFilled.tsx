/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CrossFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'cross-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm135.76 270.72L512 457.72 376.24 321.96l-54.32 54.32L457.72 512 321.96 647.76l54.32 54.32L512 566.28l135.76 135.77 54.32-54.32L566.28 512l135.77-135.76-54.32-54.32z" />
          </svg>
        ),
      }}
    />
  );
});

export default CrossFilled;
