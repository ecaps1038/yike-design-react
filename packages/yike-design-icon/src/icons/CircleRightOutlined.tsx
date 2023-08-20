/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CircleRightOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'circle-right-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm0 76.8c-212.07 0-384 171.93-384 384s171.93 384 384 384 384-171.93 384-384-171.93-384-384-384zm-61.26 148.68L686.05 512 450.74 747.32l-54.32-54.28L577.43 512 396.44 330.98l54.27-54.3z" />
          </svg>
        ),
      }}
    />
  );
});

export default CircleRightOutlined;
