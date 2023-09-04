/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import PlusCircleOutlinedSVG from './svg/PlusCircleOutlined';

const PlusCircleOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="plus-circle-outlined"
      icon={PlusCircleOutlinedSVG}
    />
  );
});

export default PlusCircleOutlined;
