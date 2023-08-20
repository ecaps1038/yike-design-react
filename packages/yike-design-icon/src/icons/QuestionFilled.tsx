/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const QuestionFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'question-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm25.6 665.6h-76.8v102.4h76.8V716.8zM512 230.4a179.2 179.2 0 0 0-179.2 179.2h76.8a102.4 102.4 0 1 1 204.8 0c0 37.89-20.58 70.96-51.17 88.9a179.35 179.35 0 0 0-101.18 140.73l77.55 1.08a103.48 103.48 0 0 1 49.15-68.74A179.2 179.2 0 0 0 512 230.4z" />
          </svg>
        ),
      }}
    />
  );
});

export default QuestionFilled;
