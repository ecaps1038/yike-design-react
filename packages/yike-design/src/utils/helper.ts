export const isObject = (val: unknown): val is object => {
  return val !== null && typeof val === 'object';
};

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

export const isArray = (val: unknown): val is unknown[] => {
  return Array.isArray(val);
};
