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
  return React.useCallback(() => normalizedContainer, [normalizedContainer]);
};
