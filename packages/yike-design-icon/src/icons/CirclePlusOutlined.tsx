/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import CirclePlusOutlinedSVG from './svg/CirclePlusOutlined';

const CirclePlusOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="circle-plus-outlined"
      icon={CirclePlusOutlinedSVG}
    />
  );
});

export default CirclePlusOutlined;
