'use client';
import type React from 'react';
import { useEffect, useRef } from 'react';

interface ResizeObserverProps<T extends Element> {
  enable?: boolean;
  onResize?: (width: number, height: number) => void;
  children?: (ref: React.RefObject<T>) => React.ReactNode;
}

const ResizeObserver = <T extends Element>({ enable = true, children, onResize }: ResizeObserverProps<T>) => {
  const domRef = useRef<T>(null);

  useEffect(() => {
    if (enable) {
      const dom = domRef.current;
      if (!dom) return;
      const resizeObserver = new window.ResizeObserver(entry => {
        if (entry.length) {
          const { width, height } = entry[0].contentRect;
          onResize?.(width, height);
        }
      });
      resizeObserver.observe(dom);
      return () => {
        resizeObserver.unobserve(dom);
      };
    }
  }, [onResize, enable]);

  return children?.(domRef);
};

export default ResizeObserver;
