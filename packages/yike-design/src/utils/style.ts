import type React from 'react';
import { isObject } from './helper';

/**
 * @description: 合并样式
 * @param {CSSStyleType[]} styles
 * @return {React.CSSProperties}
 * @example:
 * import { mergeStyles } from 'yike-design/utils';
 * const styles = mergeStyles('color: red; font-size: 16px;', { color: 'blue' });
 * console.log(styles); // { color: 'blue', fontSize: '16px' }
 */
type CSSStyleType = null | undefined | false | string | React.CSSProperties;
export const mergeStyles = (...styles: CSSStyleType[]) => {
  const cssStyles: React.CSSProperties[] = styles.map(style => {
    if (!style || isObject(style)) return style || Object.create(null);
    const styleIterable = style.matchAll(/[a-z-]*:\s*[a-z0-9()#-]+;?/g);
    const jsxStyles = Array.from(styleIterable).map(cssStyle => {
      const [cssAttr, cssValue] = cssStyle.toString().replace(';', '').split(':');
      // CC => camel case
      const cssCCAttr = cssAttr.replace(/-(\w)/, (_, text) => text.toUpperCase());
      return [cssCCAttr, cssValue];
    });
    return Object.fromEntries(jsxStyles);
  });
  return Object.assign({}, ...cssStyles);
};
