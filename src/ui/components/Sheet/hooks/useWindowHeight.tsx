import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return windowHeight;
}
