'use client';
import type React from 'react';
import { RefreshOutlined } from '@yike-design/react-icons';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

import ErrorContainer from './ErrorContainer';

const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 z-10">
        <button onClick={resetErrorBoundary}>
          <RefreshOutlined className="text-base" />
        </button>
      </div>
      <ErrorContainer error={error instanceof Error ? error : new Error('error', { cause: error })} />
    </div>
  );
};

const PreviewerErrorBoundary: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
};

export default PreviewerErrorBoundary;
