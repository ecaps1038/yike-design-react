/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const PaintBrushFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'paint-brush-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M806.4 51.2v120.3l94.31.02v322.56H494.08l-.03 120.32h56.35v268.8a89.6 89.6 0 0 1-179.2 0V614.4h56.3l.02-186.88h406.63V238.08l-27.75-.03V384H140.8V51.2h665.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default PaintBrushFilled;
