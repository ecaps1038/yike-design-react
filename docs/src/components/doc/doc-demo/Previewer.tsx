'use client';
import * as React from 'react';
import omit from 'lodash.omit';
import * as UIComponents from '@yike-design/react';
import * as IconComponents from '@yike-design/react-icons';
import { LiveError, LivePreview, LiveProvider } from 'react-live';

const Components = {
  ...omit(React, 'default'),
  ...UIComponents,
  ...IconComponents,
};

interface PreviewerProps {
  code: string;
  error?: string;
}

const Previewer: React.FC<PreviewerProps> = ({ code, error }) => {
  if (error) {
    return <pre>{error}</pre>;
  }
  return (
    <LiveProvider
      noInline
      code={code}
      scope={Components}
    >
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default Previewer;
