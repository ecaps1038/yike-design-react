'use client';
import * as React from 'react';
import * as UIComponents from '@yike-design/react';
import * as IconComponents from '@yike-design/react-icons';
import { LiveError, LivePreview, LiveProvider } from 'react-live';

const Components = {
  ...React,
  ...UIComponents,
  ...IconComponents,
};

interface CodeLiveProps {
  code: string;
  error?: string;
}

const CodeLive: React.FC<CodeLiveProps> = ({ code, error }) => {
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

export default CodeLive;
