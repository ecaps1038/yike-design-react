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
  targetContainer?: ComponentContainer;
  onChange?: (affixed: boolean) => void;
  children: React.ReactNode;
}

interface AffixRef {
  updatePosition: ReturnType<typeof throttleByAnimationFrame<Parameters<() => void>>>;
}

const Affix = React.forwardRef<AffixRef, AffixProps>((props, ref) => {
  const { offset = 0, position = 'top', target = getDefaultContainer, onChange, targetContainer = target } = props;

  const getTargetFunc = useNormalizedContainer(target);

  const getTargetContainerFunc = useNormalizedContainer(targetContainer);

  const fixedNodeRef = React.useRef<HTMLDivElement>(null);
  const affixPlaceholderRef = React.useRef<HTMLDivElement>(null);

  const [affixStyle, setAffixStyle] = React.useState<React.CSSProperties>();
  const [placeholderStyle, setPlaceholderStyle] = React.useState<React.CSSProperties>();

  const measurePosition = React.useCallback(() => {
    const target = getTargetFunc();
    if (!affixPlaceholderRef.current || !target || !fixedNodeRef.current) {
      return;
    }
    const fixedNodeRect = fixedNodeRef.current.getBoundingClientRect();
    const placeholderRect = affixPlaceholderRef.current.getBoundingClientRect();
    const placeholderScreenTop = placeholderRect.top;
    const placeholderScreenBottom = window.innerHeight - placeholderRect.bottom;

    const fixedNodeScreenTop = fixedNodeRect.top;
    const fixedNodeScreenBottom = window.innerHeight - fixedNodeRect.bottom;

    if (position === 'top') {
      const fixedTop = getFixedTop(target, offset);
      if (affixStyle && fixedNodeScreenTop !== fixedTop) {
        setAffixStyle({
          ...affixStyle,
          top: fixedTop,
        });
      } else if (placeholderScreenTop <= fixedTop && !affixStyle) {
        setAffixStyle({
          position: 'fixed',
          top: fixedTop,
          zIndex: 999,
        });
        setPlaceholderStyle({
          height: fixedNodeRef.current?.offsetHeight,
        });
        onChange?.(true);
      } else if (placeholderScreenTop > fixedTop && affixStyle) {
        setAffixStyle(undefined);
        setPlaceholderStyle(undefined);
        onChange?.(false);
      }
    } else {
      const fixedBottom = getFixedBottom(target, offset);
      if (affixStyle && fixedNodeScreenBottom !== fixedBottom) {
        setAffixStyle({
          ...affixStyle,
          bottom: fixedBottom,
        });
      } else if (placeholderScreenBottom <= fixedBottom && !affixStyle) {
        setAffixStyle({
          position: 'fixed',
          bottom: fixedBottom,
          zIndex: 999,
        });
        setPlaceholderStyle({
          height: fixedNodeRef.current?.offsetHeight,
        });
        onChange?.(true);
      } else if (placeholderScreenBottom > fixedBottom && affixStyle) {
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
    const target = getTargetFunc();
    const targetContainer = getTargetContainerFunc();
    if (!target || !targetContainer || target === targetContainer) {
      return;
    }
    TRIGGER_EVENTS.forEach(event => {
      targetContainer.addEventListener(event, updatePosition);
    });
    return () => {
      TRIGGER_EVENTS.forEach(event => {
        targetContainer.removeEventListener(event, updatePosition);
      });
      updatePosition.cancel();
    };
  }, [getTargetFunc, getTargetContainerFunc, updatePosition]);

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
