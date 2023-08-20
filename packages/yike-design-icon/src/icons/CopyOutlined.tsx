/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CopyOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'copy-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M896 51.2a25.6 25.6 0 0 1 25.6 25.6V768a25.6 25.6 0 0 1-25.6 25.6H742.4v153.6a25.6 25.6 0 0 1-25.6 25.6H128a25.6 25.6 0 0 1-25.6-25.6V256a25.6 25.6 0 0 1 25.6-25.6h153.6V76.8a25.6 25.6 0 0 1 25.6-25.6H896zm-230.4 256H179.2V896h486.4V307.2zM563.2 665.6v76.8H281.6v-76.8h281.6zM844.8 128H358.4v102.4h358.4a25.6 25.6 0 0 1 25.6 25.6v460.8h102.4V128zM563.2 460.8v76.8H281.6v-76.8h281.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default CopyOutlined;
