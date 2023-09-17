import { isString, isArray, isObject } from './helper';

const IDENTITY = 'yk';

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

type ClassItem = (string | undefined)[] | string | undefined | false;

export const clsx = (...classes: ClassItem[]) => {
  return classes
    .map(item => (Array.isArray(item) ? item.filter(Boolean).join(' ') : item ? item : ''))
    .filter(Boolean)
    .join(' ');
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

interface BEMCallable {
  (): string;
  (element: BEMElement): string;
  (element: BEMElement, modifier: BEMModifier): string;
  (element: BEMElement, modifier: BEMModifier, modifierLater: BEMModifier): string;
  (modifier: BEMModifier): string;
  (modifier: BEMModifier, modifierLater: BEMModifier): string;

  join: typeof clsx;
}

export const createCssScope = (prefix: string) => {
  const prefixClass = `${IDENTITY}-${prefix}`;

  const bem: BEMCallable = (
    elementOrModifier?: BEMElement | BEMModifier,
    modifier?: BEMModifier,
    modifierLater?: BEMModifier
  ) => {
    if (!elementOrModifier) return prefixClass;
    if (isString(elementOrModifier)) {
      const element = `${prefixClass}__${elementOrModifier}`;
      if (!modifier) return element;
      return clsx(element, createModifier(element, modifier), createModifier(element, modifierLater));
    }

    return clsx(prefixClass, createModifier(prefixClass, elementOrModifier), createModifier(prefixClass, modifier));
  };

  bem.join = clsx;

  return bem;
};
