/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const AuthenticationFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'authentication-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M530.1 59.44 649.83 179.2H819.2a25.6 25.6 0 0 1 25.6 25.6v169.32L964.56 493.9a25.6 25.6 0 0 1 0 36.2L844.77 649.83l.03 169.37a25.6 25.6 0 0 1-25.6 25.6H649.83L530.1 964.56a25.6 25.6 0 0 1-36.2 0L374.12 844.77l-169.32.03a25.6 25.6 0 0 1-25.6-25.6V649.83L59.44 530.1a25.6 25.6 0 0 1 0-36.2L179.2 374.12V204.8a25.6 25.6 0 0 1 25.6-25.6h169.32L493.9 59.44a25.6 25.6 0 0 1 36.2 0zm-145 312.68h-87.3L512 730.52l213.89-358.35h-87L512.09 584.45 385.1 372.12z" />
          </svg>
        ),
      }}
    />
  );
});

export default AuthenticationFilled;
