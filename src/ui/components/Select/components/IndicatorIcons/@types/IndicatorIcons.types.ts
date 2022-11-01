import type { EventHandler } from 'react';
import type { MouseOrTouchEvent } from 'ui/components/Menu';

export type MouseOrTouchEventHandler<T = Element> = EventHandler<MouseOrTouchEvent<T>>;

export type IndicatorIconsProps = Readonly<{
  isInvalid?: boolean;
  isLoading?: boolean;
  isMenuOpen: boolean;
  onCaretMouseDown?: MouseOrTouchEventHandler;
  onClearMouseDown: MouseOrTouchEventHandler;
  showClear: boolean;
}>;
