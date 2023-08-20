/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const MoonOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'moon-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M624.9 65.13C824.78 115.46 972.8 296.45 972.8 512c0 254.49-206.31 460.8-460.8 460.8-228.3 0-417.82-166.02-454.4-383.92a434.47 434.47 0 0 0 147.2 25.52c240.36 0 435.2-194.84 435.2-435.2 0-38.66-5.04-76.19-14.52-111.87l-.61-2.2zm96.15 124.62-4.35-2.77.02 1.03C712.02 466.7 484.63 691.2 204.8 691.2c-9.19 0-18.33-.26-27.44-.72l-5.74-.4 2.38 4.47A384.44 384.44 0 0 0 503.32 895.9l8.68.1c212.07 0 384-171.93 384-384 0-133.45-68.66-253.18-174.95-322.25z" />
          </svg>
        ),
      }}
    />
  );
});

export default MoonOutlined;
