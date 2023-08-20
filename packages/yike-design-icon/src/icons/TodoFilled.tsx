/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const TodoFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'todo-filled',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M358.4 76.8v76.8h307.2V76.8h76.8v76.8h204.8v793.6H76.8V153.6h204.8V76.8h76.8zm344.83 305.92L449.82 636.16 323.1 509.44l-54.3 54.27 181.02 181.04 307.71-307.7-54.27-54.33z" />
          </svg>
        ),
      }}
    />
  );
});

export default TodoFilled;
