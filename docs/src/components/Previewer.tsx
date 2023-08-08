import type React from 'react';

interface PreviewerProps {
  component: React.ReactNode;
}

const Previewer: React.FC<PreviewerProps> = ({ component }) => {
  return <div className="border p-5 rounded-lg border-yike">{component}</div>;
};

export default Previewer;
