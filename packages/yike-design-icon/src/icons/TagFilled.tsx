/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const TagFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'tag-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M431.51 85.48 76.34 94.05a25.6 25.6 0 0 0-24.99 25.6v345.96L558.23 972.5l380.14-380.16L431.49 85.48zM272.9 232.8a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default TagFilled;
