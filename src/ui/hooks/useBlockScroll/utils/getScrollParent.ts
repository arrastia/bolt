export function getScrollParent(node: Element): Element {
  while (node && !isScrollable(node)) {
    node = node.parentElement as Element;
  }

  return node || document.scrollingElement || document.documentElement;
}

function isScrollable(node: Element): boolean {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
