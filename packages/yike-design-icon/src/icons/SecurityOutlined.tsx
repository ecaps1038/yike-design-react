/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const SecurityOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'security-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M513.18 25.6 896 128v614.4l-383.64 256L128 742.4V128L513.18 25.6zm-.08 79.49-308.3 81.94V701.3l307.48 204.8 306.92-204.8V186.96l-306.1-81.87zm202.96 175.23 54.27 54.3-307.71 307.71L281.6 461.36l54.3-54.32 126.72 126.72 253.44-253.44z" />
          </svg>
        ),
      }}
    />
  );
});

export default SecurityOutlined;
