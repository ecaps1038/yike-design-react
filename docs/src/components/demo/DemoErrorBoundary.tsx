'use client';
import type React from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

import ErrorContainer from './ErrorContainer';

const fallbackRender = ({ error }: FallbackProps) => {
  return <ErrorContainer error={error instanceof Error ? error : new Error('error', { cause: error })} />;
};

const DemoErrorBoundary: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
};

export default DemoErrorBoundary;
