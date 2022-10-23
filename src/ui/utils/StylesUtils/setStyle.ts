import type { CSSProperties } from 'react';

export function setStyle(element: HTMLElement, style: keyof CSSProperties, value: string) {
  const currentElement = element.style[style as any];
  element.style[style as any] = value;

  return () => {
    element.style[style as any] = currentElement;
  };
}
