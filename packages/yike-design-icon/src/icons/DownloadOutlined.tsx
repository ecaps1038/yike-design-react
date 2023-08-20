/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const DownloadOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'download-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M550.4 384v463.9l88.32-88.32 54.3 54.32L512 994.92 330.98 813.9l54.3-54.3 88.32 88.32V384h76.8zm-64-332.8a332.8 332.8 0 0 1 296.09 180.74C903.96 245.48 998.4 348.49 998.4 473.6c0 130.02-102.04 236.21-230.4 242.87v.33h-51.2V640h42.75l4.48-.23a166.4 166.4 0 0 0 157.44-160.15l.13-6.02a166.4 166.4 0 0 0-147.61-165.35l-40.93-4.56-18.85-36.6a255.95 255.95 0 0 0-219.75-138.96l-8.06-.13c-136.14 0-248.3 106.57-255.59 241.82l-2.97 54.2-52.07 15.33A102.4 102.4 0 0 0 204.8 640h102.4v76.8H204.8a179.2 179.2 0 0 1-50.69-351.13C163.58 190.41 308.74 51.2 486.4 51.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default DownloadOutlined;
