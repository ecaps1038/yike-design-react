'use client';
import React from 'react';
import ResizeObserver from 'rc-resize-observer';

import type { ComponentContainer } from '../_types';
import { getFixedBottom, getFixedTop } from './utils';
import { getDefaultContainer } from '../_utils/container';
import { throttleByAnimationFrame } from '../_utils/throttle';
import { useNormalizedContainer } from '../_utils/hooks/useNormalizedContainer';

// events that will trigger affix re-calculate
const TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'] as const;

// TODO: update API to top and bottom (support both top and bottom)
interface AffixProps {
  offset?: number;
  position?: 'top' | 'bottom';
  target?: ComponentContainer;
  onChange?: (affixed: boolean) => void;
  children: React.ReactNode;
}

interface AffixRef {
  updatePosition: ReturnType<typeof throttleByAnimationFrame<Parameters<() => void>>>;
}

const Affix = React.forwardRef<AffixRef, AffixProps>((props, ref) => {
  const { offset = 0, position = 'top', target = getDefaultContainer, onChange } = props;

  const getTargetFunc = useNormalizedContainer(target);

  const fixedNodeRef = React.useRef<HTMLDivElement>(null);
  const affixPlaceholderRef = React.useRef<HTMLDivElement>(null);

  const [affixStyle, setAffixStyle] = React.useState<React.CSSProperties>();
  const [placeholderStyle, setPlaceholderStyle] = React.useState<React.CSSProperties>();

  const measurePosition = React.useCallback(() => {
    const target = getTargetFunc();
    if (!affixPlaceholderRef.current || !target) {
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
          zIndex: 999,
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
          zIndex: 999,
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

  // TODO: improve performance
  React.useEffect(() => {
    const target = getTargetFunc();
    if (!target) {
      return;
    }
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

  React.useImperativeHandle(ref, () => ({ updatePosition }));

  return (
    <ResizeObserver onResize={updatePosition}>
      <div ref={affixPlaceholderRef} style={placeholderStyle}>
        <div ref={fixedNodeRef} style={affixStyle}>
          <ResizeObserver onResize={updatePosition}>{props.children}</ResizeObserver>
        </div>
      </div>
    </ResizeObserver>
  );
});

export default Affix;
