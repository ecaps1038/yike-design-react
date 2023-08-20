/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const StatisticsOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'statistics-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M486.4 102.4v435.2h435.2c0 240.36-194.84 435.2-435.2 435.2S51.2 777.96 51.2 537.6s194.84-435.2 435.2-435.2zm-76.8 85.04-1.1.26C248 223.23 128 366.39 128 537.6 128 735.54 288.46 896 486.4 896c168.35 0 309.58-116.04 348.06-272.51l2.07-9.09H409.6V187.44zm153.6-135.5C783.16 64.7 959.3 240.84 972.03 460.8H563.2V51.94zm76.77 90.88v241.15h241.16l-2.15-7.06a359.35 359.35 0 0 0-231.89-231.89l-7.09-2.17z" />
          </svg>
        ),
      }}
    />
  );
});

export default StatisticsOutlined;
