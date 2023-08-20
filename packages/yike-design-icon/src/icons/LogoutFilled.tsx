/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const LogoutFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'logout-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M896 76.8v204.8h-76.8v-128H345.6l268.8 76.8v588.8h204.8v-76.8H896V896H614.4v102.4L76.8 844.8v-768H896zm-62.26 296.14 162.92 137.32-162.92 137.32-.02-98.9-166.38-.02v-76.8h166.38l.02-98.92z" />
          </svg>
        ),
      }}
    />
  );
});

export default LogoutFilled;
