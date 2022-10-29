import type { MediaQuery } from 'ui/hooks/useBreakpoints';
import type { Breakpoints } from 'ui/styles/themes/breakpoints';

export const createMediaQueries = (breakpoints: Breakpoints): MediaQuery[] => {
  const bp = Object.keys(breakpoints) as (keyof Breakpoints)[];
  const sortedBreakpoints = bp.sort((a, b) => breakpoints[b] - breakpoints[a]);

  return sortedBreakpoints.map((breakpoint, index) => {
    let query = '';

    const minWidth = breakpoints[breakpoint];
    const nextBreakpoint = sortedBreakpoints[index - 1] as keyof Breakpoints | undefined;
    const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] : null;

    if (minWidth >= 0) query = `(min-width: ${minWidth}px)`;

    if (maxWidth !== null) {
      if (query) query += ' and ';

      query += `(max-width: ${maxWidth - 1}px)`;
    }

    return { breakpoint, maxWidth: maxWidth ? maxWidth - 1 : null, minWidth, query };
  });
};
