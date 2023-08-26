/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import ShopCartFilledSVG from './svg/ShopCartFilled';

const ShopCartFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="shop-cart-filled"
      icon={ShopCartFilledSVG}
    />
  );
});

export default ShopCartFilled;
