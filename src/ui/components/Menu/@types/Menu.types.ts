import type { MouseEvent, ReactNode, TouchEvent } from 'react';

export type MenuOptionStatus = 'selected' | 'disabled' | 'hidden' | 'idle';
export type MouseOrTouchEvent<T = Element> = MouseEvent<T> | TouchEvent<T>;

export interface MenuOption {
  id: string;
  index?: number;
  label: string;
  status?: MenuOptionStatus;
  value: string;
}

export interface MenuProps {
  isOpen: boolean;
  onMenuMouseDown?: (event: MouseOrTouchEvent<HTMLDivElement>) => void;
  options: MenuOption[];
}

export interface MenuListProps {
  focusedOptionIndex: number;
  isLoading?: boolean;
  menuOptions: MenuOption[];
  renderOptionLabel: (option: MenuOption) => ReactNode;
  selectOption: (option: MenuOption, isSelected?: boolean) => void;
}
