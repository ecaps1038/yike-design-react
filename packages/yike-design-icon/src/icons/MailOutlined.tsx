/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const MailOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'mail-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M972.8 140.8v768H51.2v-768h921.6zM896 401 512 550.04 128 401v431h768V401zm0-183.4H128v101.02l384 149.02 384-149.02V217.6z" />
          </svg>
        ),
      }}
    />
  );
});

export default MailOutlined;
