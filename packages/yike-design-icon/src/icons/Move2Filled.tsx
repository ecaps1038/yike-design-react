/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const Move2Filled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'move-2-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M896 320v128H768V320zm0 256v128H768V576zM576 320v128H448V320zm0 256v128H448V576zM256 320v128H128V320zm0 256v128H128V576z" />
          </svg>
        ),
      }}
    />
  );
});

export default Move2Filled;
