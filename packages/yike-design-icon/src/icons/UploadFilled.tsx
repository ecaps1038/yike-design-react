/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const UploadFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'upload-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M486.4 102.4c176.18 0 320.38 136.88 332.03 310.12C934.91 430.59 1024 531.3 1024 652.8a243.2 243.2 0 0 1-256 242.87v.33H204.8l.03-1.82a179.2 179.2 0 0 1-35.08-356.35A331.6 331.6 0 0 1 153.6 435.2c0-183.8 149-332.8 332.8-332.8zm12.8 274.48L299.06 600.6l136.14-.02V793.6h128V600.58h136.14L499.2 376.9z" />
          </svg>
        ),
      }}
    />
  );
});

export default UploadFilled;
