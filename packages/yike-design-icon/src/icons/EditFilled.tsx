/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const EditFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'edit-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M51.2 896h921.6v76.8H51.2zm442.96-675.2 180.99 181.02-425.22 425.26-190.2 9.22 9.19-190.2 425.21-425.3zM783.8 76.03l36.2 36.2a102.4 102.4 0 0 1 0 144.82l-90.53 90.5-181.02-181 90.53-90.52a102.4 102.4 0 0 1 144.82 0z" />
          </svg>
        ),
      }}
    />
  );
});

export default EditFilled;
