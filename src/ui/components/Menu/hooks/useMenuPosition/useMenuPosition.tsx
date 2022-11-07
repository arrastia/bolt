import type { CSSProperties, RefObject } from 'react';

export const useMenuPosition = (appendTo?: RefObject<HTMLElement>): CSSProperties => {
  if (!appendTo || !appendTo.current) return {};

  const { left, bottom, width } = appendTo.current.getBoundingClientRect();

  return { top: `${bottom}px`, left: `${left}px`, width: `${width}px` };
};
