/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const TagOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'tag-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M431.51 85.48 76.34 94.05a25.6 25.6 0 0 0-24.99 25.6v345.96L558.23 972.5l380.14-380.16L431.49 85.48zm-31.07 77.57 429.3 429.28-271.53 271.52-430.03-430.03v-264.2l272.26-6.6zM298.52 232.8a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8zm0 66.56a35.84 35.84 0 1 1 0 71.68 35.84 35.84 0 0 1 0-71.68z" />
          </svg>
        ),
      }}
    />
  );
});

export default TagOutlined;
