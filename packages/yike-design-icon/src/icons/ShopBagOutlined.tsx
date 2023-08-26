/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import ShopBagOutlinedSVG from './svg/ShopBagOutlined';

const ShopBagOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="shop-bag-outlined"
      icon={ShopBagOutlinedSVG}
    />
  );
});

export default ShopBagOutlined;
