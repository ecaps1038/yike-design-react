import React from 'react';
import useUpdateEffect from './useUpdateEffect';

export const useMergeState = <T>(value: T | undefined, defaultValue: T) => {
  const isControlled = value !== undefined;

  const [state, setState] = React.useState<T>(() => value ?? defaultValue);

  const setMergeState = React.useCallback(
    (value: T) => {
      if (!isControlled) {
        setState(value);
      }
    },
    [isControlled]
  );

  useUpdateEffect(() => {
    if (isControlled) {
      setState(value!);
    }
  }, [value, isControlled]);

  return [state, setMergeState] as const;
};
