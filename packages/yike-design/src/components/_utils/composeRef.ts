import type React from 'react';

const composeRef = <T>(...refs: React.Ref<T>[]): React.Ref<T> => {
  const refCallback: React.RefCallback<T> = value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };

  return refCallback;
};

export default composeRef;
