import type { Breakpoints } from 'ui/styles/themes/breakpoints';

export type Breakpoint = {
  breakpoint: keyof Breakpoints | undefined;
  maxWidth?: number | undefined;
  minWidth: Breakpoints[keyof Breakpoints] | undefined;
};

export type MediaQuery = { breakpoint: keyof Breakpoints; maxWidth: number | null; minWidth: Breakpoints[keyof Breakpoints]; query: string };
