import React from 'react';
import { useUpdate } from './useUpdate';
import type { Container, ContainerType } from '../../_types';

// make container func memoized, and update when container of return changed
export const useContainerMemo = (containerFn: ContainerType) => {
  const update = useUpdate();
  const containerMemo = React.useRef<Container>();

  React.useEffect(() => {
    const current = containerFn();
    if (current !== containerMemo.current) {
      // update when container changed (ignore first render)
      if (containerMemo.current != null) {
        update();
      }
      containerMemo.current = current;
    }
  }, [containerFn, update]);

  return React.useCallback(() => {
    if (typeof window === 'undefined') {
      throw new Error('can not get container in server environment');
    } else if (containerMemo.current == null) {
      throw new Error('can not get container in render state');
    }
    return containerMemo.current as Container;
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerMemo.current]);
};
