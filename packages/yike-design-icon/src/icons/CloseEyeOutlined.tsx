/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import CloseEyeOutlinedSVG from './svg/CloseEyeOutlined';

const CloseEyeOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="close-eye-outlined"
      icon={CloseEyeOutlinedSVG}
    />
  );
});

export default CloseEyeOutlined;
