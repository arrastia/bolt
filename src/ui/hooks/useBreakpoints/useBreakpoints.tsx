import { useCallback, useDebugValue, useEffect, useMemo, useState } from 'react';

import { breakpoints } from 'ui/styles/themes/breakpoints';

import { createMediaQueries } from './utils/createMediaQueries';

import type { Breakpoint } from './@types/Breakpoints.types';

const EMPTY_BREAKPOINT = { breakpoint: undefined, maxWidth: undefined, minWidth: undefined } as const;

export const useBreakpoints = () => {
  const mediaQueries = useMemo(() => createMediaQueries(breakpoints), []);

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(EMPTY_BREAKPOINT);

  const updateBreakpoint = useCallback(({ matches }: MediaQueryList | MediaQueryListEvent, breakpoint: Breakpoint) => {
    if (matches) setCurrentBreakpoint(breakpoint);
  }, []);

  useEffect(() => {
    const unsubscribe = mediaQueries.map(({ query, ...breakpoint }) => {
      const list = window.matchMedia(query);

      updateBreakpoint(list, breakpoint as Breakpoint);

      const handleChange = (event: MediaQueryListEvent) => updateBreakpoint(event, breakpoint as Breakpoint);

      list.addListener(handleChange);

      return () => list.removeListener(handleChange);
    });

    return () => {
      unsubscribe.forEach(unsubscriber => unsubscriber());
    };
  }, [mediaQueries, updateBreakpoint]);

  useDebugValue(currentBreakpoint, ({ breakpoint, minWidth, maxWidth }) =>
    typeof breakpoint === 'string' ? `${breakpoint} (${minWidth} ≤ x${maxWidth ? ` < ${maxWidth + 1}` : ''})` : ''
  );

  return currentBreakpoint;
};
