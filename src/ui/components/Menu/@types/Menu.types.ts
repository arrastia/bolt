import type { MouseEvent, ReactNode, RefObject, TouchEvent } from 'react';

export type LabelCallback = (data: MenuOption) => string;
export type MenuOptionStatus = 'selected' | 'disabled' | 'hidden' | 'idle';
export type MouseOrTouchEvent<T = Element> = MouseEvent<T> | TouchEvent<T>;

export interface MenuOption {
  extra?: any;
  icon?: ReactNode;
  id: string;
  index?: number;
  label: string;
  status?: MenuOptionStatus;
  value: string;
}

export interface MenuProps {
  appendTo?: RefObject<HTMLElement>;
  getOptionLabel?: LabelCallback;
  isOpen: boolean;
  onMenuMouseDown?: (event: MouseOrTouchEvent<HTMLDivElement>) => void;
  onSelect?: (option: MenuOption) => void;
  options: MenuOption[];
}

export interface MenuListProps {
  focusedOptionIndex: number;
  isLoading?: boolean;
  menuOptions: MenuOption[];
  renderOptionLabel: (option: MenuOption) => ReactNode;
  selectOption: (option: MenuOption, isSelected?: boolean) => void;
}
