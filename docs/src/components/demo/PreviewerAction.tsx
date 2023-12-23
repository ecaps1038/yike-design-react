'use client';
import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CodeOutlined, CopyOutlined } from '@yike-design/react-icons';

import CodeBlock from './CodeBlock';
import type { FileRecord } from '@/types';

interface PreviewerActionProps {
  files: FileRecord[];
  singleLink?: string;
}

const PreviewerAction: React.FC<PreviewerActionProps> = ({ files, singleLink }) => {
  const [showCode, setShowCode] = React.useState(false);

  const hiddenClass = clsx({ hidden: !showCode });

  const btnClass = 'text-base rounded-lg leading-[0px] bg-yike-2 p-1.5 hover:bg-yike-3 transition-colors duration-300';

  const codeBtnClass = clsx(btnClass, { '!bg-yike-neutral': showCode, 'text-yike-bg-1': showCode });

  const [currentFilePath, setCurrentFile] = React.useState(files.length ? files[0].path : null);

  const currentFile = files.find(file => file.path === currentFilePath);

  const code = currentFile?.source ?? '';

  return (
    <React.Fragment>
      <div className="flex items-center justify-end gap-4 py-2">
        {/* TODO: add sandbox button */}
        {singleLink && (
          <Link target="_blank" href={singleLink} className={btnClass}>
            <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentcolor">
              <path d="M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z" />

              <path d="M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z" />
            </svg>
          </Link>
        )}

        <CopyToClipboard
          text={code}
          // TODO: change to message component
          onCopy={() => alert('拷贝成功')}
        >
          <button className={clsx(btnClass, hiddenClass)}>
            <CopyOutlined />
          </button>
        </CopyToClipboard>
        <button className={codeBtnClass} onClick={() => setShowCode(!showCode)}>
          <CodeOutlined />
        </button>
      </div>
      <div className={hiddenClass}>
        <div className="rounded overflow-hidden border border-yike-1">
          {files.length > 1 && (
            <div className="border-b border-yike-1 p-1">
              {files.map(file => (
                <button
                  key={file.path}
                  onClick={() => setCurrentFile(file.path)}
                  className={clsx('mr-2 text-sm', { 'text-primary': file === currentFile })}
                >
                  {file.filename}
                </button>
              ))}
            </div>
          )}
          <CodeBlock code={code} language={currentFile?.language ?? ''} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PreviewerAction;
