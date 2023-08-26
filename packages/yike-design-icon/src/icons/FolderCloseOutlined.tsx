/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import FolderCloseOutlinedSVG from './svg/FolderCloseOutlined';

const FolderCloseOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="folder-close-outlined"
      icon={FolderCloseOutlinedSVG}
    />
  );
});

export default FolderCloseOutlined;
