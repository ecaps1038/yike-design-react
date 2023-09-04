/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import PersonInformationOutlinedSVG from './svg/PersonInformationOutlined';

const PersonInformationOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="person-information-outlined"
      icon={PersonInformationOutlinedSVG}
    />
  );
});

export default PersonInformationOutlined;
