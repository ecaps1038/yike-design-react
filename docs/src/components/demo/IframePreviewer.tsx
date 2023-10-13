import type React from 'react';

interface IframePreviewerProps {
  src: string;
}

const IframePreviewer: React.FC<IframePreviewerProps> = ({ src }) => {
  return (
    <div className="border border-yike-1">
      <div className="bg-neutral-1 h-6 w-full flex items-center gap-1 pl-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5959]" />
        <span className="w-3 h-3 rounded-full bg-[#ffc75a]" />
        <span className="w-3 h-3 rounded-full bg-[#6bdb43]" />
      </div>
      <iframe
        src={src}
        className="w-full h-80"
      />
    </div>
  );
};

export default IframePreviewer;
