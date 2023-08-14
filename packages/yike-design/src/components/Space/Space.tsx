import type React from 'react';
import { getAlign, getDirection, getGapSize } from './utils';
import type { YkSpaceProps } from './utils';
import './style/Space.scss';
import { isArray, isNumber, isString } from '../../utils/helper';

const Space: React.FC<React.PropsWithChildren<YkSpaceProps>> = props => {
  const { align = 'start', direction = 'horizontal', size = 'l', wrap = false, children, ...other } = props;

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
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: getDirection(direction),
    alignItems: getAlign(align),
    ...resolveGapSize(),
  };

  return (
    <div
      className="yk-space"
      style={style_}
      {...other}
    >
      {children}
    </div>
  );
};

export default Space;
