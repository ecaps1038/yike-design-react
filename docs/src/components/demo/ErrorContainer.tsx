import type React from 'react';
import { CircleCrossOutlined } from '@yike-design/react-icons';

interface ErrorContainerProps {
  error: Error;
}

const ErrorContainer: React.FC<ErrorContainerProps> = ({ error }) => {
  return (
    <div className="leading-relaxed">
      <p className="flex items-center text-lg text-danger">
        <CircleCrossOutlined className="font-bold" />
        <span className="mx-1 font-bold">ERROR</span>
        <p className="ml-1 text-sm truncate leading-tight">{error.message}</p>
      </p>
      <section className="text-base">
        {error.stack && (
          <p>
            <details open>
              <summary>Error stack</summary>
              <pre className="max-h-24 overflow-auto text-sm pl-4">{error.stack}</pre>
            </details>
          </p>
        )}
      </section>
    </div>
  );
};

export default ErrorContainer;
