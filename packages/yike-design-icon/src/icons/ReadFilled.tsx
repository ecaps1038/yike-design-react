/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ReadFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'read-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M344.65 128c56.32 0 112.08 17.08 167.35 51.2l9.75-5.84C573.82 143.1 626.35 128 679.35 128H972.8v742.4H676.76c-58 0-112.92 17.08-164.76 51.2-51.84-34.12-106.75-51.2-164.76-51.2H51.2V128h293.45zM819.2 537.6h-192v76.8h192v-76.8zm-422.4 0h-192v76.8h192v-76.8zm422.4-179.2h-192v76.8h192v-76.8zm-422.4 0h-192v76.8h192v-76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default ReadFilled;
