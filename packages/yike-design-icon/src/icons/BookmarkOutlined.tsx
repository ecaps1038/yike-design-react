/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const BookmarkOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'bookmark-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M896 51.2v921.6H128V51.2h768zM819.2 128h-76.8v307.2l-115.2-78.85L512 435.2V128H204.8v768h614.4V128zm-143.36 0h-97.28v180.97l48.64-33.28 48.64 33.3V128z" />
          </svg>
        ),
      }}
    />
  );
});

export default BookmarkOutlined;
