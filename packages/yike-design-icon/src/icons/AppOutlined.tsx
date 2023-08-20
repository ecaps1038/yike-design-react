/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const AppOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'app-outlined',
        component: (
          <svg
            viewBox="0 0 40 40"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M18.5 3.5v15h-15v-15h15Zm-3 3h-9v9h9v-9Zm3 15v15h-15v-15h15Zm-3 3h-9v9h9v-9Zm21-21v15h-15v-15h15Zm-3 3h-9v9h9v-9Zm3 15v15h-15v-15h15Zm-3 3h-9v9h9v-9Z" />
          </svg>
        ),
      }}
    />
  );
});

export default AppOutlined;
