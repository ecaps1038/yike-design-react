/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const BackFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'back-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M422.4 750.34a25.6 25.6 0 0 1-42.37 19.35L60.73 492.95a25.6 25.6 0 0 1 0-38.7l319.3-276.74a25.6 25.6 0 0 1 42.37 19.35V332.8h140.8c223.51 0 405.25 179.05 409.52 401.54l.08 8.06c0 45.5-7.42 89.27-21.1 130.12C899.59 722.25 756.8 614.4 588.8 614.4H422.4z" />
          </svg>
        ),
      }}
    />
  );
});

export default BackFilled;
