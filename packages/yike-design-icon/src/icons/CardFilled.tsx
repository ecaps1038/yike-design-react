/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const CardFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'card-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M972.8 422.4v460.8H51.2V422.4h921.6zm-128 256H614.4v76.8h230.4v-76.8zM51.2 140.8h921.6v204.8H51.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default CardFilled;
