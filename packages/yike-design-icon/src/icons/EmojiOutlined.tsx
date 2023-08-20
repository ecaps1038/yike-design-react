/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const EmojiOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'emoji-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm0 76.8c-212.07 0-384 171.93-384 384s171.93 384 384 384 384-171.93 384-384-171.93-384-384-384zm150.22 481.74 64.38 41.9A255.8 255.8 0 0 1 512 768a255.74 255.74 0 0 1-212.53-113.25l63.74-42.8A179.02 179.02 0 0 0 512 691.2a179.05 179.05 0 0 0 150.22-81.46zM358.4 358.4a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zm307.2 0a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z" />
          </svg>
        ),
      }}
    />
  );
});

export default EmojiOutlined;
