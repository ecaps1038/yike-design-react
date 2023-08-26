/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import PersonInformationFilledSVG from './svg/PersonInformationFilled';

const PersonInformationFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="person-information-filled"
      icon={PersonInformationFilledSVG}
    />
  );
});

export default PersonInformationFilled;
