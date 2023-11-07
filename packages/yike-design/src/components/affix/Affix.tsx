'use client';
import React from 'react';
import ResizeObserver from 'rc-resize-observer';

import type { ComponentContainer } from '../_types';
import { getFixedBottom, getFixedTop } from './utils';
import { getDefaultContainer } from '../_utils/container';
import { throttleByAnimationFrame } from '../_utils/throttle';

// evnets that will trigger affix re-calculate
const TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'] as const;

// TODO: update API to offsetTop and offsetBottom
interface AffixProps {
  offset?: number;
  position?: 'top' | 'bottom';
  target?: ComponentContainer;
  onChange?: (affixed: boolean) => void;
}

// TODO: fix scroll window will out of container
const Affix: React.FC<React.PropsWithChildren<AffixProps>> = ({ children, ...props }) => {
  const { offset = 0, position = 'top', target = getDefaultContainer, onChange } = props;

  const getTargetFunc = target;

  const fixedNodeRef = React.useRef<HTMLDivElement>(null);
  const affixPlaceholderRef = React.useRef<HTMLDivElement>(null);

  const [affixStyle, setAffixStyle] = React.useState<React.CSSProperties>();
  const [placeholderStyle, setPlaceholderStyle] = React.useState<React.CSSProperties>();

  const measurePosition = React.useCallback(() => {
    const target = getTargetFunc();
    if (!affixPlaceholderRef.current) {
      return;
    }
    const placeholderRect = affixPlaceholderRef.current.getBoundingClientRect();
    const { top: currentScreenTop } = placeholderRect;
    const currentScreenBottom = window.innerHeight - placeholderRect.bottom;
    if (position === 'top') {
      const fixedTop = getFixedTop(target, offset);
      if (currentScreenTop <= fixedTop && !affixStyle) {
        setAffixStyle({
          position: 'fixed',
          top: fixedTop,
          zIndex: 10,
        });
        setPlaceholderStyle({
          height: fixedNodeRef.current?.offsetHeight,
        });
        onChange?.(true);
      } else if (currentScreenTop > fixedTop && affixStyle) {
        setAffixStyle(undefined);
        setPlaceholderStyle(undefined);
        onChange?.(false);
      }
    } else {
      const fixedBottom = getFixedBottom(target, offset);
      if (currentScreenBottom <= fixedBottom && !affixStyle) {
        setAffixStyle({
          position: 'fixed',
          bottom: fixedBottom,
          zIndex: 10,
        });
        setPlaceholderStyle({
          height: fixedNodeRef.current?.offsetHeight,
        });
        onChange?.(true);
      } else if (currentScreenBottom > fixedBottom && affixStyle) {
        setAffixStyle(undefined);
        setPlaceholderStyle(undefined);
        onChange?.(false);
      }
    }
  }, [getTargetFunc, affixStyle, offset, position, onChange]);

  const updatePosition = React.useMemo(() => throttleByAnimationFrame(measurePosition), [measurePosition]);

  React.useEffect(() => {
    const target = getTargetFunc();

    TRIGGER_EVENTS.forEach(event => {
      target.addEventListener(event, updatePosition);
    });

    return () => {
      TRIGGER_EVENTS.forEach(event => {
        target.removeEventListener(event, updatePosition);
      });
      updatePosition.cancel();
    };
  }, [getTargetFunc, updatePosition]);

  React.useEffect(() => {
    measurePosition();
  }, [measurePosition]);

  return (
    <ResizeObserver onResize={updatePosition}>
      <div ref={affixPlaceholderRef} style={placeholderStyle}>
        <div ref={fixedNodeRef} style={affixStyle}>
          <ResizeObserver onResize={updatePosition}>{children}</ResizeObserver>
        </div>
      </div>
    </ResizeObserver>
  );
};

export default Affix;
