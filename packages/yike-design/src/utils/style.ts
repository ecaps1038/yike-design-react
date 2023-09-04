import type React from 'react';
import { isArray, isObject, isString } from './helper';

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

type ClassNameType = string | undefined | false | null;

export const mergeClasses = (...classes: ClassNameType[]) => {
  return classes.filter(Boolean).join(' ');
};

type PrefixClassName = ClassNameType | ClassNameType[] | Record<string, ClassNameType>;
/**
 * 使用方式参考 clsx 或 classnames
 */
export const createPrefixClass = (ns: string) => {
  const prefix = `yike-${ns}`;

  return (...classnames: PrefixClassName[]) => {
    return mergeClasses(
      ...classnames
        .map(_class => {
          if (isString(_class)) return _class && `${prefix}-${_class}`;
          if (isArray(_class)) {
            return _class.map(name => name && `${prefix}-${name}`);
          }
          if (isObject(_class)) {
            return Object.entries(_class).map(([name, status]) => {
              return status && `${prefix}-${name}`;
            });
          }
          return _class;
        })
        .flat(1)
    );
  };
};
