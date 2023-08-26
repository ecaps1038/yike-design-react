/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import PaintBrushFilledSVG from './svg/PaintBrushFilled';

const PaintBrushFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="paint-brush-filled"
      icon={PaintBrushFilledSVG}
    />
  );
});

export default PaintBrushFilled;
