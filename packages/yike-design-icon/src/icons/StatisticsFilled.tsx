/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const StatisticsFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'statistics-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M486.4 102.4v435.2h435.2c0 240.36-194.84 435.2-435.2 435.2S51.2 777.96 51.2 537.6s194.84-435.2 435.2-435.2zm76.8-50.46C783.16 64.7 959.3 240.84 972.03 460.8H563.2V51.94z" />
          </svg>
        ),
      }}
    />
  );
});

export default StatisticsFilled;
