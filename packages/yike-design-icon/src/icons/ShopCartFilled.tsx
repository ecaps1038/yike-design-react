/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const ShopCartFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'shop-cart-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M208.05 76.8a25.6 25.6 0 0 1 25.37 22.12l18.36 134.27h664.65a25.6 25.6 0 0 1 25.16 30.29l-80.12 432.38a25.6 25.6 0 0 1-25.17 20.94H263.2a25.6 25.6 0 0 1-25.4-22.37l-6.66-52.38h-.74L168.52 153.6H51.2V76.8h156.85zm99.15 665.6a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zm0 66.56a35.84 35.84 0 1 0 0 71.68 35.84 35.84 0 0 0 0-71.68zm486.4-66.56a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zm0 66.56a35.84 35.84 0 1 0 0 71.68 35.84 35.84 0 0 0 0-71.68z" />
          </svg>
        ),
      }}
    />
  );
});

export default ShopCartFilled;
