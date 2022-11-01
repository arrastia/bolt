import type { RefObject } from 'react';

export interface useMenuPositionerProps {
  isOpen: boolean;
  menuItemSize: number;
  menuOptionsLength: number;
  menuRef: RefObject<HTMLElement | null>;
}
