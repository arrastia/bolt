import { getScrollParent, getScrollTop, smoothScrollTo } from 'ui/utils/ScrollUtils';

export const scrollMenuIntoViewOnOpen = (menuElement: Element | null, handleOnMenuOpen: (availableSpace?: number) => void) => {
  if (!menuElement) {
    handleOnMenuOpen();
    return;
  }

  const { bottom, height, top } = menuElement.getBoundingClientRect();

  const viewInner = window.innerHeight;
  const viewSpaceBelow = viewInner - top;

  if (viewSpaceBelow >= height) {
    handleOnMenuOpen();
    return;
  }

  const scrollParent = getScrollParent(menuElement);
  const scrollTop = getScrollTop(scrollParent);
  const spaceBelow = scrollParent.getBoundingClientRect().height - scrollTop - top;
  const notEnoughSpaceBelow = spaceBelow < height;

  if (notEnoughSpaceBelow) {
    const condensedMenuHeight = notEnoughSpaceBelow ? spaceBelow : undefined;
    handleOnMenuOpen(condensedMenuHeight);
    return;
  }

  // Do scroll and upon scroll animation completion, execute the callback if defined
  const marginBottomStyle = getComputedStyle(menuElement).marginBottom;
  const marginBottom = parseInt(marginBottomStyle, 10);
  const scrollDown = bottom - viewInner + scrollTop + marginBottom;

  smoothScrollTo(scrollParent, scrollDown, handleOnMenuOpen);
};
