'use client';
import type React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';

interface ShadowContentProps {
  root: ShadowRoot;
}

const ShadowContent: React.FC<React.PropsWithChildren<ShadowContentProps>> = ({ root, children }) => {
  return ReactDOM.createPortal(children, root);
};

interface PreviewerProps {
  style: string;
  component: React.ReactNode;
}

const Previewer: React.FC<PreviewerProps> = ({ component, style }) => {
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot>();

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef.current) {
      const root = rootRef.current.attachShadow({ mode: 'open' });
      setShadowRoot(root);
    }
  }, []);

  return (
    <div
      ref={rootRef}
      className="border p-5 rounded-lg border-yike"
    >
      {shadowRoot && (
        <ShadowContent root={shadowRoot}>
          <style>{style}</style>
          {component}
        </ShadowContent>
      )}
    </div>
  );
};

export default Previewer;
