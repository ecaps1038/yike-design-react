import type React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <Highlight
      theme={themes.jettwaveLight}
      code={code}
      language={language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div
          style={style}
          className="p-4 !bg-white"
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
