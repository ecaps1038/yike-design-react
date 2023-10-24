'use client';
import type React from 'react';
import { useTheme } from 'next-themes';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const { theme } = useTheme();

  return (
    <Highlight
      code={code}
      language={language}
      theme={theme === 'light' ? themes.jettwaveLight : themes.jettwaveDark}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div
          style={style}
          className="p-4 !bg-yike-1"
        >
          <pre className="overflow-x-auto">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
              >
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token })}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
