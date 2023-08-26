/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import FolderOpenFilledSVG from './svg/FolderOpenFilled';

const FolderOpenFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="folder-open-filled"
      icon={FolderOpenFilledSVG}
    />
  );
});

export default FolderOpenFilled;
