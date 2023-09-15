'use client';
import type React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface IconBoxProps {
  name: string;
  icon: React.ReactNode;
}

const IconBox: React.FC<IconBoxProps> = ({ name, icon }) => {
  const copyText = `<${name} />`;

  return (
    <CopyToClipboard
      text={copyText}
      // TODO: change to message component
      onCopy={() => alert(copyText + ' copied 🎉')}
    >
      <div className="text-center cursor-pointer p-3 py-4 rounded hover:bg-primary hover:scale-110 hover:text-white transition duration-200">
        <div className="text-4xl">{icon}</div>
        <div className="truncate text-sm">{name}</div>
      </div>
    </CopyToClipboard>
  );
};

export default IconBox;
