import { useCallback, useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useEvent<T extends (...args: any[]) => any>(handler: T) {
  const handlerRef = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: any[]) => {
    const fn = handlerRef.current;

    return fn?.(...args);
  }, []) as T;
}
