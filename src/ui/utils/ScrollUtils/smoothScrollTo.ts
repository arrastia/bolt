import { getScrollTop } from './getScrollTop';
import { scrollTo } from './scrollTo';

function easeOutCubic(change: number, duration: number, start: number, time: number): number {
  return change * ((time = time / duration - 1) * time * time + 1) + start;
}

export function smoothScrollTo(element: Element, to: number, callback?: () => void) {
  let currentTime = 0;

  const duration: number = 300;
  const start = getScrollTop(element);
  const change = to - start;

  function scrollFn() {
    currentTime += 5;
    const calcScrollTop = easeOutCubic(change, duration, start, currentTime);
    scrollTo(element, calcScrollTop);

    currentTime < duration ? requestAnimationFrame(scrollFn) : callback?.();
  }

  requestAnimationFrame(scrollFn);
}
