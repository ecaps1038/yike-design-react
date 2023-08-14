export const isObject = (val: unknown): val is object => {
  return val !== null && typeof val === 'object';
};

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

export function isFunction(val: any): val is (...args: any[]) => any {
  return typeof val === 'function';
}

export const isArray = (val: unknown): val is string[] => {
  return Array.isArray(val);
};

export function isNumber(val: any): val is number {
  return Object.prototype.toString.call(val) === '[object Number]' && val === val;
}
