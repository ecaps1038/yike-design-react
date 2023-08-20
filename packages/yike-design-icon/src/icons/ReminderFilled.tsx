/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ReminderFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'reminder-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 972.8c254.49 0 460.8-206.31 460.8-460.8S766.49 51.2 512 51.2 51.2 257.51 51.2 512 257.51 972.8 512 972.8zm38.4-614.4h-76.8V256h76.8v102.4zm0 409.6h-76.8V435.2h76.8V768z" />
          </svg>
        ),
      }}
    />
  );
});

export default ReminderFilled;
