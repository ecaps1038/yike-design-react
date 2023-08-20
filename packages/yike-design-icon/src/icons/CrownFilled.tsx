/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CrownFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'crown-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="m512 102.4 203.83 230.2L972.8 230.4 870.4 896H153.6L51.2 230.4l258.05 102.2L512 102.4zm0 358.4a140.8 140.8 0 1 0 0 281.6 140.8 140.8 0 0 0 0-281.6zm0 76.8a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" />
          </svg>
        ),
      }}
    />
  );
});

export default CrownFilled;
