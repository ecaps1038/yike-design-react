import { isWindow } from './is';
import type { Container } from '../_types';

export const getScrollTop = (container: Container) => {
  return container === window ? window.scrollY : (container as HTMLElement).scrollTop;
};

export const scrollContainerToY = (container: Container, target: number) => {
  if (isWindow(container)) {
    container.scrollTo(window.scrollX, target);
  } else {
    container.scrollTop = target;
  }
};

interface ScrollToOptions {
  duration?: number;
}

export const scrollYTo = (container: Container, target: number, options: ScrollToOptions = {}) => {
  const { duration = 450 } = options;
  const current = getScrollTop(container);
  const offset = target - current;
  // TODO: improve the animation
  const step = offset / (duration / 16);
  let next = current;
  return new Promise<void>(resolve => {
    const scrollFn = () => {
      next = next + step;
      next = offset > 0 ? (next > target ? target : next) : next < target ? target : next;
      scrollContainerToY(container, offset > 0 ? (next > target ? target : next) : next < target ? target : next);
      if (next === target) {
        resolve();
        return;
      }
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  });
};

export const getOffsetTop = (element: HTMLElement, container: Container) => {
  const rect = element.getBoundingClientRect();
  if (isWindow(container)) {
    return rect.top - element.ownerDocument!.documentElement!.clientTop;
  }
  const { top: baseTop } = container.getBoundingClientRect();
  return rect.top - baseTop;
};

export const getOffsetBottom = (element: HTMLElement, container: Container) => {
  const rect = element.getBoundingClientRect();
  if (isWindow(container)) {
    return element.ownerDocument!.documentElement!.clientHeight - rect.bottom;
  }
  const { top: baseTop } = container.getBoundingClientRect();
  return baseTop - rect.bottom;
};
