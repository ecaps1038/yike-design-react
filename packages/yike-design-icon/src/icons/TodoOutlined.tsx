/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const TodoOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: 'todo-outlined',
        component: (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M358.4 76.8v76.8h307.2V76.8h76.8v76.8h204.8v793.6H76.8V153.6h204.8V76.8h76.8zm-76.8 153.6h-128v640h716.8v-640h-128v76.8h-76.8v-76.8H358.4v76.8h-76.8v-76.8zm418.92 152.68 54.3 54.32L447.1 745.11 266.06 564.12l54.32-54.32L447.1 636.52l253.42-253.44z" />
          </svg>
        ),
      }}
    />
  );
});

export default TodoOutlined;
