/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import CircleCrossOutlinedSVG from './svg/CircleCrossOutlined';

const CircleCrossOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="circle-cross-outlined"
      icon={CircleCrossOutlinedSVG}
    />
  );
});

export default CircleCrossOutlined;
