/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const Move1Filled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'move-1-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M320 128h128v128H320zm256 0h128v128H576zM320 448h128v128H320zm256 0h128v128H576zM320 768h128v128H320zm256 0h128v128H576z" />
          </svg>
        ),
      }}
    />
  );
});

export default Move1Filled;
