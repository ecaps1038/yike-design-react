import type React from 'react';
import CodeBlock from './CodeBlock';

interface CodeBlockWrapperProps {
  language: string;
  code: string;
}

const CodeBlockWrapper: React.FC<CodeBlockWrapperProps> = ({ language, code }) => {
  return (
    <div className="rounded overflow-hidden border border-yike-1 mt-4">
      <CodeBlock
        code={code.trim()}
        language={language}
      />
    </div>
  );
};

export default CodeBlockWrapper;
