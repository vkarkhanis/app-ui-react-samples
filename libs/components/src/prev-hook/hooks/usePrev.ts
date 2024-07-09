import * as React from 'react';

export const usePrev = <T>(value: T) => {
  const prev = React.useRef<T>();

  React.useEffect(() => {
    prev.current = value;
  }, [value]);

  return { prev: prev.current };
};
