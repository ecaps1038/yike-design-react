/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const SettingsFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'settings-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M755.2 90.78 998.4 512 755.2 933.22H268.8L25.6 512 268.8 90.78h486.4zM512 307.2a204.8 204.8 0 1 0 0 409.6 204.8 204.8 0 0 0 0-409.6zm0 76.8a128 128 0 1 1 0 256 128 128 0 0 1 0-256z" />
          </svg>
        ),
      }}
    />
  );
});

export default SettingsFilled;
