/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ImageFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'image-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M921.6 76.8a25.6 25.6 0 0 1 25.6 25.6v819.2a25.6 25.6 0 0 1-25.6 25.6H102.4a25.6 25.6 0 0 1-25.6-25.6V102.4a25.6 25.6 0 0 1 25.6-25.6h819.2zm-51.2 76.8H153.6v376.93L305.66 422.1 512 670.41 642.64 563.2 870.4 765.98V153.6zM678.4 256a89.6 89.6 0 1 1 0 179.2 89.6 89.6 0 0 1 0-179.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default ImageFilled;
