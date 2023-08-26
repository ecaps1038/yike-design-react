/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import Yike1OutlinedSVG from './svg/Yike1Outlined';

const Yike1Outlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="yike-1-outlined"
      icon={Yike1OutlinedSVG}
    />
  );
});

export default Yike1Outlined;
