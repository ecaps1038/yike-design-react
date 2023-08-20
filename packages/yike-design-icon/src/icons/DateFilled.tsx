/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const DateFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'date-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M947.2 460.8v486.4H76.8V460.8h870.4zm-588.8-384v76.8h307.2V76.8h76.8v76.8h204.8V384H76.8V153.6h204.8V76.8h76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default DateFilled;
