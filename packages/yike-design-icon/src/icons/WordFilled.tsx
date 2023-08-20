/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const WordFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'word-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M563.2 51.2v358.4h358.4v512a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V102.4a51.2 51.2 0 0 1 51.2-51.2h409.6zm-192.3 468h-76.5l72.01 331.51h87l54-211.5c2.98-9.01 5-21.5 6-37.5 1 14 3 26.49 5.99 37.5l51 211.48h84.01l71.99-331.5h-75l-36 223.5a547.8 547.8 0 0 0-4.5 37.52h-1.5c0-8.01-1.02-18.02-2.99-30a24.55 24.55 0 0 1-1.53-6.02l-53.97-225H471.4l-51 222c-2 11.01-3.99 24.02-6.01 39.02h-1.49c-1.02-10-1.5-13.52-1.5-10.5v-.07l-.37-4.97c-.76-9.67-1.5-16.8-2.25-21.37l-.38-2.1-37.5-222zm269.25-468 280.68 281.6H640V51.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default WordFilled;
