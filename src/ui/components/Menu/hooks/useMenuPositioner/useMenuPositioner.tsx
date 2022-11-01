import { useEffect, useRef, useState } from 'react';

import { scrollMenuIntoViewOnOpen } from './utils/scrollMenuIntoViewOnOpen';

import type { useMenuPositionerProps } from './@types/useMenuPositioner.types';

const MENU_HEIGHT_DEFAULT = 250;

export const useMenuPositioner = ({ menuItemSize, isOpen, menuOptionsLength, menuRef }: useMenuPositionerProps) => {
  const [menuHeight, setMenuHeight] = useState(MENU_HEIGHT_DEFAULT);

  const resetMenuHeightRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      const handleOnMenuOpen = (availableSpace?: number): void => {
        if (availableSpace) {
          resetMenuHeightRef.current = true;
          setMenuHeight(availableSpace);
        }
      };

      scrollMenuIntoViewOnOpen(menuRef.current, handleOnMenuOpen);
    } else {
      if (resetMenuHeightRef.current) {
        resetMenuHeightRef.current = false;
        setMenuHeight(MENU_HEIGHT_DEFAULT);
      }
    }
  }, [menuRef, isOpen]);

  return Math.min(menuHeight, menuOptionsLength * menuItemSize);
};
