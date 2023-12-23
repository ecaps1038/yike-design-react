import { isWindow } from '../../_utils/is';
import type { Container } from '../../_types';

export const getFixedTop = (target: Container, offset: number) => {
  return (isWindow(target) ? 0 : target.getBoundingClientRect().top) + offset;
};

export const getFixedBottom = (target: Container, offset: number) => {
  return (isWindow(target) ? 0 : window.innerHeight - target.getBoundingClientRect().bottom) + offset;
};
