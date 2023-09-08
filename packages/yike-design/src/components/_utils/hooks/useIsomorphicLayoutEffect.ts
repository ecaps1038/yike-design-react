import React from 'react';

const isSSR = (function () {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();

const useIsomorphicLayoutEffect = isSSR ? React.useEffect : React.useLayoutEffect;

export default useIsomorphicLayoutEffect;
