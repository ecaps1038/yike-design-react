export const isObject = (val: unknown): val is object => {
  return val !== null && typeof val === 'object';
};

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};
