/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import ClosedEyeFilledSVG from './svg/ClosedEyeFilled';

const ClosedEyeFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="closed-eye-filled"
      icon={ClosedEyeFilledSVG}
    />
  );
});

export default ClosedEyeFilled;
