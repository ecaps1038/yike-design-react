import { isWindow } from '../../_utils/is';
import type { ContainerType } from '../../_types';

export const getFixedTop = (target: ContainerType, offset: number) => {
  return (isWindow(target) ? 0 : target.getBoundingClientRect().top) + offset;
};

export const getFixedBottom = (target: ContainerType, offset: number) => {
  return (isWindow(target) ? 0 : window.innerHeight - target.getBoundingClientRect().bottom) + offset;
};
