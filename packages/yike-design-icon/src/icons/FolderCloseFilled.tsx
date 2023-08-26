/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import FolderCloseFilledSVG from './svg/FolderCloseFilled';

const FolderCloseFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="folder-close-filled"
      icon={FolderCloseFilledSVG}
    />
  );
});

export default FolderCloseFilled;
