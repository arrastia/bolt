import { getScrollParent } from './getScrollParent';

export function scrollIntoView(target: Element) {
  const root = document.scrollingElement || document.documentElement;

  while (target && target !== root) {
    const scrollable = getScrollParent(target);

    if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
      const scrollableTop = scrollable.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;

      if (targetTop > scrollableTop + target.clientHeight) {
        scrollable.scrollTop += targetTop - scrollableTop;
      }
    }

    target = scrollable.parentElement as Element;
  }
}
