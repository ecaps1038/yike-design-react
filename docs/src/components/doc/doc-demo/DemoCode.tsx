'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CodeOutlined, CopyOutlined } from '@yike-design/react-icons';
import CodeBlock from './CodeBlock';

interface DemoCodeProps {
  lang: string;
  code: string;
}

const DemoCode = ({ code, lang }: DemoCodeProps) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const hiddenClass = clsx({ hidden: !showCode });

  const btnClass = 'text-base rounded-lg leading-[0px] bg-[--bgcolors] p-1.5';

  const codeBtnClass = clsx(btnClass, { 'bg-[--fontcolorl]': showCode, 'text-[--bgcolorl]': showCode });

  return (
    <div>
      <div className="flex items-center justify-end gap-4 py-2">
        <CopyToClipboard
          text={code}
          // TODO: change to message component
          onCopy={() => alert('拷贝成功')}
        >
          <button className={clsx(btnClass, hiddenClass)}>
            <CopyOutlined />
          </button>
        </CopyToClipboard>
        <button
          className={codeBtnClass}
          onClick={() => setShowCode(!showCode)}
        >
          <CodeOutlined />
        </button>
      </div>
      <div className={hiddenClass}>
        <div className="text-sm leading-normal">
          <CodeBlock
            lang={lang}
            code={code}
          />
        </div>
      </div>
    </div>
  );
};

export default DemoCode;
