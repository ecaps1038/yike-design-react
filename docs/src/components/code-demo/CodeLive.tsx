'use client';
import type React from 'react';
import * as UIComponents from '@yike-design/react';
import * as IconComponents from '@yike-design/react-icons';
import { LiveError, LivePreview, LiveProvider } from 'react-live';

const Components = {
  ...UIComponents,
  ...IconComponents,
};

interface CodeLiveProps {
  code: string;
}

const CodeLive: React.FC<CodeLiveProps> = ({ code }) => {
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

export default CodeLive;
