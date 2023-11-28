'use client';
import React from 'react';

interface IframePreviewerProps {
  src: string;
}

type IframeElementWithContentWindow<T> = HTMLIFrameElement & { contentWindow: Window & T };

type IframeWithHTMLAnchorElement = IframeElementWithContentWindow<{ HTMLAnchorElement: typeof HTMLAnchorElement }>;

const hasHTMLAnchorElement = (iframe: HTMLIFrameElement): iframe is IframeWithHTMLAnchorElement => {
  return Boolean(iframe.contentWindow && 'HTMLAnchorElement' in iframe.contentWindow);
};

const IframePreviewer: React.FC<IframePreviewerProps> = ({ src }) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  // prevent anchors in iframe cause main page scroll in chrome and safari
  React.useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    const clickListener = (e: MouseEvent) => {
      if (
        hasHTMLAnchorElement(iframe) &&
        e.target instanceof iframe.contentWindow.HTMLAnchorElement &&
        // e.target.href will reutrn full url
        /^#/.test(e.target.getAttribute('href') ?? '')
      ) {
        e.preventDefault();
      }
    };

    const loadListener = () => {
      iframe.contentWindow?.document.body.addEventListener('click', clickListener);
    };

    const removeClickListener = () => {
      iframe.contentWindow?.document.body.removeEventListener('click', clickListener);
    };

    iframe.addEventListener('load', loadListener);

    return () => {
      removeClickListener();
      iframe.removeEventListener('load', loadListener);
    };
  }, []);

  return (
    <div className="border border-yike-1">
      <div className="bg-neutral-1 h-6 w-full flex items-center gap-1 pl-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5959]" />
        <span className="w-3 h-3 rounded-full bg-[#ffc75a]" />
        <span className="w-3 h-3 rounded-full bg-[#6bdb43]" />
      </div>
      <iframe src={src} ref={iframeRef} className="w-full h-80" />
    </div>
  );
};

export default IframePreviewer;
