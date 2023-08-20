/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const FolderCloseFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'folder-close-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M51.2 409.6h921.6V896a51.2 51.2 0 0 1-51.2 51.2H102.4A51.2 51.2 0 0 1 51.2 896V409.6zm51.2-307.2h240.3a51.2 51.2 0 0 1 42.45 22.55l53.86 79.85H921.6a51.2 51.2 0 0 1 51.2 51.2v76.8H51.2V153.6a51.2 51.2 0 0 1 51.2-51.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default FolderCloseFilled;
