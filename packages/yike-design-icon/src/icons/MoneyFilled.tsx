/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const MoneyFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'money-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm120.35 193.38L512 453 391.65 244.6l-66.5 38.4L442.57 486.4H358.4v76.8h115.2v51.2H358.4v76.8h115.2v128h76.8v-128h115.2v-76.8H550.4v-51.2h115.2v-76.8h-84.2l117.45-203.42-66.5-38.4z" />
          </svg>
        ),
      }}
    />
  );
});

export default MoneyFilled;
