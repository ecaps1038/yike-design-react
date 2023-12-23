'use client';
import clsx from 'clsx';
import React from 'react';
import { LoadingOutlined } from '@yike-design/react-icons';

interface IframePreviewerProps {
  src: string;
}

type IframeElementWithContentWindow<T> = HTMLIFrameElement & { contentWindow: Window & T };

type IframeWithHTMLAnchorElement = IframeElementWithContentWindow<{ HTMLAnchorElement: typeof HTMLAnchorElement }>;

const hasHTMLAnchorElement = (iframe: HTMLIFrameElement): iframe is IframeWithHTMLAnchorElement => {
  return Boolean(iframe.contentWindow && 'HTMLAnchorElement' in iframe.contentWindow);
};

const IframePreviewer: React.FC<IframePreviewerProps> = ({ src }) => {
  const [loaded, setLoaded] = React.useState(false);
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
      setLoaded(true);
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
      <div className="h-80">
        {!loaded && (
          <div className="flex p-1 justify-end">
            <LoadingOutlined className="animate-iframe-loaing text-primary text-xl" />
          </div>
        )}
        <iframe src={src} ref={iframeRef} className={clsx('w-full h-full', !loaded && 'hidden')} />
      </div>
    </div>
  );
};

export default IframePreviewer;
