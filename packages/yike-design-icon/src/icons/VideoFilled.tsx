/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const VideoFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'video-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M563.2 51.2v358.4h358.4v512a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V102.4a51.2 51.2 0 0 1 51.2-51.2h409.6zm-153.6 384v358.4l256-179.2-256-179.2zm230.55-384 280.68 281.6H640V51.2z" />
          </svg>
        ),
      }}
    />
  );
});

export default VideoFilled;
