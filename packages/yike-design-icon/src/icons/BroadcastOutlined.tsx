/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import BroadcastOutlinedSVG from './svg/BroadcastOutlined';

const BroadcastOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="broadcast-outlined"
      icon={BroadcastOutlinedSVG}
    />
  );
});

export default BroadcastOutlined;
