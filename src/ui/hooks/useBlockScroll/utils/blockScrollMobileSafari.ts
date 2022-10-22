import { addEvent } from './addEvent';
import { chain } from './chain';
import { getScrollParent } from './getScrollParent';
import { scrollIntoView } from './scrollIntoView';
import { setStyle } from 'ui/utils/StylesUtils';
import { willOpenKeyboard } from './willOpenKeyboard';

export function blockScrollMobileSafari() {
  let scrollable: Element;
  let lastY = 0;

  const onTouchStart = (event: TouchEvent) => {
    scrollable = getScrollParent(event.target as Element);

    if (scrollable === document.documentElement && scrollable === document.body) return;

    lastY = event.changedTouches[0].pageY;
  };

  const onTouchMove = (event: TouchEvent) => {
    if (scrollable === document.documentElement || scrollable === document.body) {
      event.preventDefault();
      return;
    }

    const y = event.changedTouches[0].pageY;
    const scrollTop = scrollable.scrollTop;
    const bottom = scrollable.scrollHeight - scrollable.clientHeight;

    if ((scrollTop <= 0 && y > lastY) || (scrollTop >= bottom && y < lastY)) {
      event.preventDefault();
    }

    lastY = y;
  };

  const onTouchEnd = (event: TouchEvent) => {
    const target = event.target as HTMLElement;

    if (willOpenKeyboard(target) && target !== document.activeElement) {
      event.preventDefault();

      target.style.transform = 'translateY(-2000px)';
      target.focus();

      requestAnimationFrame(() => {
        target.style.transform = '';
      });
    }
  };

  const onFocus = (event: FocusEvent) => {
    const target = event.target as HTMLElement;

    if (willOpenKeyboard(target)) {
      target.style.transform = 'translateY(-2000px)';

      requestAnimationFrame(() => {
        target.style.transform = '';

        if (visualViewport) {
          if (visualViewport.height < window.innerHeight) {
            requestAnimationFrame(() => {
              scrollIntoView(target);
            });
          } else {
            visualViewport.addEventListener('resize', () => scrollIntoView(target), { once: true });
          }
        }
      });
    }
  };

  const onWindowScroll = () => {
    window.scrollTo(0, 0);
  };

  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;

  const restoreStyles = chain(
    setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`),
    setStyle(document.documentElement, 'overflow', 'hidden'),
    setStyle(document.body, 'marginTop', `-${scrollY}px`)
  );

  window.scrollTo(0, 0);

  const removeEvents = chain(
    addEvent(document, 'touchstart', onTouchStart, { passive: false, capture: true }),
    addEvent(document, 'touchmove', onTouchMove, { passive: false, capture: true }),
    addEvent(document, 'touchend', onTouchEnd, { passive: false, capture: true }),
    addEvent(document, 'focus', onFocus, true),
    addEvent(window, 'scroll', onWindowScroll)
  );

  return () => {
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}
