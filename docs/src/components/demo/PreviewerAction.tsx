'use client';
import clsx from 'clsx';
import React from 'react';
import { useRouter } from 'next/navigation';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CodeOutlined, CopyOutlined, ShareOutlined } from '@yike-design/react-icons';

import CodeBlock from './CodeBlock';
import type { FileRecord } from '@/types';
import { IS_DEV } from '@/utils/constants';

interface PreviewerActionProps {
  files: FileRecord[];
  external?: [string, string];
}

const PreviewerAction: React.FC<PreviewerActionProps> = ({ files, external }) => {
  const router = useRouter();

  const [showCode, setShowCode] = React.useState(false);

  const hiddenClass = clsx({ hidden: !showCode });

  const btnClass = 'text-base rounded-lg leading-[0px] bg-[--bgcolors] p-1.5';

  const codeBtnClass = clsx(btnClass, { 'bg-[--fontcolorl]': showCode, 'text-[--bgcolorl]': showCode });

  const [currentFilePath, setCurrentFile] = React.useState(files.length ? files[0].path : null);

  const currentFile = files.find(file => file.path === currentFilePath);

  const code = currentFile?.source ?? '';

  return (
    <React.Fragment>
      <div className="flex items-center justify-end gap-4 py-2">
        {IS_DEV && external && (
          <button
            className={btnClass}
            onClick={() => router.push(`/demos/${external.join('/')}`)}
          >
            <ShareOutlined />
          </button>
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
        <button
          className={codeBtnClass}
          onClick={() => setShowCode(!showCode)}
        >
          <CodeOutlined />
        </button>
      </div>
      <div className={hiddenClass}>
        <div className="rounded overflow-hidden border border-yike">
          {files.length > 1 && (
            <div className="border-b border-yike p-1">
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
          <CodeBlock
            code={code}
            language={currentFile?.language ?? ''}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PreviewerAction;
