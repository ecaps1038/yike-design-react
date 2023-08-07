'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as HighlighterStyles from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

interface DemoCodeProps {
  lang: string;
  code: string;
}

// TODO: 按钮样式美化（待 ICON 组件完成）

const DemoCode = ({ code, lang }: DemoCodeProps) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const hiddenClass = clsx({ hidden: !showCode });

  const codeBlockClassNames = clsx('bg-[#282c34] rounded-lg p-4', { hidden: !showCode });

  return (
    <div>
      <div className="flex justify-end gap-4">
        <CopyToClipboard text={code}>
          <button className={hiddenClass}>Copy</button>
        </CopyToClipboard>
        <button onClick={() => setShowCode(!showCode)}>Code</button>
      </div>
      <div className={codeBlockClassNames}>
        <SyntaxHighlighter
          codeTagProps={{}}
          language={lang}
          style={HighlighterStyles.coldarkDark}
          customStyle={{
            fontSize: 16,
            background: 'none',
            margin: 0,
            padding: 0,
            lineHeight: 'inherit',
            overflow: 'initial',
            fontFamily: 'inherit',
            border: 'none',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DemoCode;
