import { isString, isArray, isObject } from './helper';

type BEMElement = string;
type BEMModifier = (string | undefined | false)[] | Record<string, boolean | string | undefined>;

const createModifier = (prefixClass: string, modifierObject?: BEMModifier) => {
  let modifiers: string[] = [];
  if (isArray(modifierObject)) {
    modifiers = modifierObject
      .map(modifier => {
        if (!modifier) return '';
        return `${prefixClass}--${modifier}`;
      })
      .filter(Boolean);
  } else if (isObject(modifierObject)) {
    modifiers = Object.entries(modifierObject).map(([modifier, value]) => {
      if (!value) return '';
      return `${prefixClass}--${modifier}`;
    });
  }
  return modifiers;
};

/**
 * CSS BEM
 * @example
 * const bem = createCssScope('button')
 * bem() // button
 * bem('label') // button__label
 * bem({ disabled }) // button button--disabled
 * bem('label', { disabled }) // button__label button__label--disabled
 * bem(['disabled', 'primary']) // button button--disabled button--primary
 * bem(['disabled', 'primary']) // button button--disabled button--primary
 * bem([type, status, shape, size], {loading: loading,long: long,disabled: disabled}),
 * bem('main',[type, status, shape, size], {loading: loading,long: long,disabled: disabled}),
 */

export const createCssScope = (prefix: string, identity = 'yk') => {
  const prefixClass = `${identity}-${prefix.replace(identity, '')}`;

  return (elementOrModifier?: BEMElement | BEMModifier, modifier?: BEMModifier, modifierLater?: BEMModifier) => {
    if (!elementOrModifier) return prefixClass;
    if (isString(elementOrModifier)) {
      const element = `${prefixClass}__${elementOrModifier}`;
      if (!modifier) return element;
      return [element, ...createModifier(element, modifier), ...createModifier(element, modifierLater)].join(' ');
    }
    return [
      prefixClass,
      ...createModifier(prefixClass, elementOrModifier),
      ...createModifier(prefixClass, modifier),
    ].join(' ');
  };
};
