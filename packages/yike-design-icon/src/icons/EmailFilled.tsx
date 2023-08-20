/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const EmailFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'email-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M972.8 371.2v537.6H51.2V371.2L512 550.04 972.8 371.2zM51.2 288.9V140.8h921.6v148.1L512 467.28 51.2 288.9z" />
          </svg>
        ),
      }}
    />
  );
});

export default EmailFilled;
