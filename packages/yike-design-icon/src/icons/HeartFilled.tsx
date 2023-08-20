/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const HeartFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'heart-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M121.45 190.57c100.45-100.48 263.34-100.48 363.82 0L514 219.29l28.72-28.72c98.74-98.77 257.8-100.46 358.6-5.12l5.25 5.12c100.48 100.45 100.48 263.34 0 363.82L552.3 908.67a54.17 54.17 0 0 1-76.6 0L121.46 554.4c-100.48-100.48-100.48-263.37 0-363.82z" />
          </svg>
        ),
      }}
    />
  );
});

export default HeartFilled;
