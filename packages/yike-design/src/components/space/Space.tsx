import type React from 'react';
import type { YkSpaceProps } from './utils';
import { getAlign, getDirection, getGapSize } from './utils';
import { isArray, isNumber, isString } from '../../utils';

const Space: React.FC<React.PropsWithChildren<YkSpaceProps>> = props => {
  const { block, align = 'start', direction = 'horizontal', size = 'l', wrap = false, children, ...other } = props;

  const resolveGapSize = (): React.CSSProperties => {
    if (isArray(size)) {
      return {
        rowGap: size[1],
        columnGap: size[0],
      };
    }
    if (isNumber(size)) {
      return { gap: size };
    }
    if (isString(size)) {
      return { gap: getGapSize(size) };
    }
    return { gap: 4 };
  };

  const style_: React.CSSProperties = {
    display: block ? 'flex' : 'inline-flex',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: getDirection(direction),
    alignItems: getAlign(align),
    ...resolveGapSize(),
  };

  return (
    <div style={style_} {...other}>
      {children}
    </div>
  );
};

export default Space;
