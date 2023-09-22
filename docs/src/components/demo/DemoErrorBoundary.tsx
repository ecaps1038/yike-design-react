'use client';
import type React from 'react';
import { CircleCrossOutlined } from '@yike-design/react-icons';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

const fallbackRender = ({ error }: FallbackProps) => {
  return (
    <div className="leading-relaxed">
      <p className="flex items-center text-lg text-danger">
        <CircleCrossOutlined className="font-bold" />
        <span className="ml-1 font-bold">Error</span>
        <p className="ml-2 text-base">{error.message ?? 'This demo has been crashed.'}</p>
      </p>
      <section className="text-base">
        {error.stack && (
          <p>
            <details open>
              <summary>Error stack</summary>
              <pre className="max-h-20 overflow-auto text-sm pl-4">{error.stack}</pre>
            </details>
          </p>
        )}
      </section>
    </div>
  );
};

const DemoErrorBoundary: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
};

export default DemoErrorBoundary;
