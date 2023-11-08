export const throttleByAnimationFrame = <T extends unknown[]>(fn: (...args: T) => void) => {
  let requestId: number | null = null;

  const later = (args: T) => {
    requestId = null;
    fn(...args);
  };

  const throttled = (...args: T) => {
    if (requestId == null) {
      requestId = requestAnimationFrame(() => later(args));
    }
  };

  const cancel = () => {
    if (requestId != null) {
      cancelAnimationFrame(requestId);
      requestId = null;
    }
  };

  throttled.cancel = cancel;

  return throttled;
};
