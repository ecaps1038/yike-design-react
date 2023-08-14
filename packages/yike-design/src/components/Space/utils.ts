import type { Size, Direction, Align } from '../../utils/constant';

type GapSizeUnit = Size | number | [number, number];

export interface YkSpaceProps {
  align: Align;
  direction: Direction;
  size: GapSizeUnit;
  wrap: boolean;
  block: boolean;
}

export const getDirection = (dirction: Direction): React.CSSProperties['flexDirection'] => {
  if (dirction === 'horizontal') {
    return 'row';
  } else {
    return 'column';
  }
};

export const getAlign = (align: Align): React.CSSProperties['alignItems'] => {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'baseline':
      return 'baseline';
    default:
      return 'center';
  }
};

export const getGapSize = (size: GapSizeUnit): number => {
  switch (size) {
    case 's':
      return 4;
    case 'm':
      return 8;
    case 'l':
      return 16;
    case 'xl':
      return 24;
    default:
      return 4;
  }
};
