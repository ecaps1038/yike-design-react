'use client';
import type React from 'react';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

interface CodeBlockProps {
  lang: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ lang, code }) => {
  return (
    <SyntaxHighlighter
      codeTagProps={{}}
      language={lang}
      style={coldarkDark}
      customStyle={{
        fontSize: 16,
        background: '#282c34',
        margin: 0,
        padding: 16,
        lineHeight: 'inherit',
        overflow: 'initial',
        fontFamily: 'inherit',
        border: 'none',
        borderRadius: 8,
        maxHeight: 500,
        overflowY: 'auto',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
