/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import Yike1FilledSVG from './svg/Yike1Filled';

const Yike1Filled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="yike-1-filled"
      icon={Yike1FilledSVG}
    />
  );
});

export default Yike1Filled;
