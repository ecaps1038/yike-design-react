/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const DataOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'data-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M89.6 588.8h76.8v332.8H89.6zM243.2 256H320v665.6h-76.8zm153.6 128h76.8v537.6h-76.8zm153.6-281.6h76.8v819.2h-76.8zM704 512h76.8v409.6H704zm153.6 230.4h76.8v179.2h-76.8z" />
          </svg>
        ),
      }}
    />
  );
});

export default DataOutlined;
