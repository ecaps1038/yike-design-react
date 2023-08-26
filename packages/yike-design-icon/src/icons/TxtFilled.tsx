/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import TxtFilledSVG from './svg/TxtFilled';

const TxtFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="txt-filled"
      icon={TxtFilledSVG}
    />
  );
});

export default TxtFilled;
