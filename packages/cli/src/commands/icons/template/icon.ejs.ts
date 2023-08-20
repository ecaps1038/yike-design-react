export const iconTemplate = `
/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

import React from 'react';
import YiKeIcon from '../components/YiKeIcon';
import type { YiKeIconProps } from '../types';

const <%- component %> = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      icon={{
        name: '<%- name %>',
        component: (
          <%- svg %>
        )
      }}
    />
  );
});

export default <%- component %>;
`.trimStart();

export const exportTemplate = `
/**
 * GENERATE BY @yike-design/cli
 * DON NOT EDIT IT MANUALLY
 */

<% for( let index = 0; index < files.length; index++ ) { %>
export { default as  <%- files[index] %> } from './<%- files[index] %>';
<% } %>
`.trimStart();
