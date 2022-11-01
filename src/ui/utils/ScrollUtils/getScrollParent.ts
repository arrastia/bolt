import { isScrollableStyle } from './isScrollableStyle';

export function getScrollParent(element: Element): Element {
  let style = getComputedStyle(element);

  const docEl = document.documentElement;
  const isParentAbs = style.position === 'absolute';

  if (style.position === 'fixed') return docEl;

  for (let parent: Element | null = element; (parent = parent?.parentElement); ) {
    style = getComputedStyle(parent);

    if (!(isParentAbs && style.position === 'static') && isScrollableStyle(style)) return parent;
  }

  return docEl;
}
