/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ShareOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'share-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 128v76.8H128v665.6h742.4V512h76.8v435.2h-896V128H512zm243.84-53.66 264.45 271.52h-101.5l-.26-.26H742.4A166.4 166.4 0 0 0 576 512v233.65h-76.8V512a243.2 243.2 0 0 1 243.2-243.2h99.3L701.54 128.64l54.3-54.3z" />
          </svg>
        ),
      }}
    />
  );
});

export default ShareOutlined;
