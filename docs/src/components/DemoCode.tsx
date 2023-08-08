'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CodeBlock from './CodeBlock';

interface DemoCodeProps {
  lang: string;
  code: string;
}

// TODO: 按钮样式美化（待 ICON 组件完成）

const DemoCode = ({ code, lang }: DemoCodeProps) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const hiddenClass = clsx({ hidden: !showCode });

  return (
    <div>
      <div className="flex justify-end gap-4">
        <CopyToClipboard text={code}>
          <button className={hiddenClass}>Copy</button>
        </CopyToClipboard>
        <button onClick={() => setShowCode(!showCode)}>Code</button>
      </div>
      <div className={hiddenClass}>
        <CodeBlock
          lang={lang}
          code={code}
        />
      </div>
    </div>
  );
};

export default DemoCode;
