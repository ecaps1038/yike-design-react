import React from 'react';
import type { ComponentContainer } from '../../_types';

export const useNormalizedContainer = (container: ComponentContainer) => {
  const [normalizedContainer, setNormalizedContainer] = React.useState(container);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNormalizedContainer(container);
    });
    return () => clearTimeout(timer);
  }, [container]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(() => normalizedContainer, [container, normalizedContainer]);
};
