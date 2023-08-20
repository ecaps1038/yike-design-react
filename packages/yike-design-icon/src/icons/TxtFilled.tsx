/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const TxtFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'txt-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M563.2 51.2v358.4h358.4v512a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V102.4a51.2 51.2 0 0 1 51.2-51.2h409.6zm86.2 468h-291v61.51h108v269.98h76.5V580.7h106.5v-61.54zm-9.22-468 280.65 281.6H640V51.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default TxtFilled;
