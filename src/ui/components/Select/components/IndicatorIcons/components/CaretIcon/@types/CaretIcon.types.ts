import type { EventHandler } from 'react';
import type { MouseOrTouchEvent } from 'ui/components/Menu';

export type MouseOrTouchEventHandler<T = Element> = EventHandler<MouseOrTouchEvent<T>>;

export interface CaretIconProps {
  isActive: boolean;
  isInvalid?: boolean;
  onCaretMouseDown?: MouseOrTouchEventHandler;
}
