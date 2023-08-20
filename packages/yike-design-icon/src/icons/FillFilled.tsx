/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const FillFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'fill-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m521.3 245.84 253.43 253.44-375.75 375.78a102.76 102.76 0 0 1-56.55 28.77c-160.31 25.1-243.87 34.18-250.7 27.34-6.84-6.83 1.56-90.9 25.21-252.23a101.66 101.66 0 0 1 28.75-57.47l375.6-375.63zm360.95-107.47a179.2 179.2 0 0 1 0 253.44L829 444.95 575.56 191.54l53.25-53.17a179.2 179.2 0 0 1 253.44 0z" />
          </svg>
        ),
      }}
    />
  );
});

export default FillFilled;
