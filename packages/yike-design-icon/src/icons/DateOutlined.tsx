/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const DateOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'date-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M358.4 76.8v76.8h307.2V76.8h76.8v76.8h204.8v793.6H76.8V153.6h204.8V76.8h76.8zm512 384H153.6v409.6h716.8V460.8zM281.6 230.4h-128V384h716.8V230.4h-128v76.8h-76.8v-76.8H358.4v76.8h-76.8v-76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default DateOutlined;
