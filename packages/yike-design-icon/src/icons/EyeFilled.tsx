/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const EyeFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'eye-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M419.15 512a92.85 92.85 0 1 0 185.7 0 92.85 92.85 0 0 0-185.7 0zM512 257.23C231.04 257.23 62 512 62 512s169.04 254.77 450 254.77C792.17 766.77 962 512 962 512S792.17 257.23 512 257.23zm0 433.33c-98.4 0-178.56-80.13-178.56-178.56 0-98.4 80.13-178.56 178.56-178.56 98.4 0 178.56 80.13 178.56 178.56 0 98.4-80.13 178.56-178.56 178.56z" />
          </svg>
        ),
      }}
    />
  );
});

export default EyeFilled;
