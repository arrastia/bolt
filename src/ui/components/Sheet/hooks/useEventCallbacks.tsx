import { useCallback, useEffect, useRef } from 'react';
import { usePrevious } from './usePrevious';

import type { MutableRefObject } from 'react';
import type { SheetEvents } from '../@types/Sheet.types';

export const useEventCallbacks = (isOpen: boolean, callbacks: MutableRefObject<SheetEvents>) => {
  const prevOpen = usePrevious(isOpen);
  const didOpen = useRef(false);

  // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet
  const handleAnimationComplete = useCallback(() => {
    if (!didOpen.current) {
      callbacks.current.onOpenEnd?.();
      didOpen.current = true;
    } else {
      callbacks.current.onCloseEnd?.();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  return { handleAnimationComplete };
};
