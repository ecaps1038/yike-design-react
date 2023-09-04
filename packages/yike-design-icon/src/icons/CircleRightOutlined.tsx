/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import CircleRightOutlinedSVG from './svg/CircleRightOutlined';

const CircleRightOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="circle-right-outlined"
      icon={CircleRightOutlinedSVG}
    />
  );
});

export default CircleRightOutlined;
