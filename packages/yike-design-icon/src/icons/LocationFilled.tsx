/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const LocationFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'location-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c197.94 0 358.4 160.46 358.4 358.4 0 131.97-119.48 319.7-358.4 563.2-238.92-243.5-358.4-431.23-358.4-563.2 0-197.94 160.46-358.4 358.4-358.4zm0 204.8a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 0 0 0-307.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default LocationFilled;
