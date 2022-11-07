import type { ReactNode } from 'react';
import type { InputStatus } from 'ui/components/Input';
import type { MenuOption, MenuOptionStatus } from 'ui/components/Menu';

export type FocusedOption = SelectedOption & { index: number; status?: MenuOptionStatus };
export type OptionLabelCallback = (data: MenuOption) => string;
export type SelectedOption = { data?: MenuOption; label?: string; value?: string };

export interface SelectProps {
  getOptionLabel?: OptionLabelCallback;
  getOptionValue?: (option: MenuOption) => void;
  onOptionChange?: (data: MenuOption) => any;
  options?: MenuOption[];
  status?: InputStatus;
}
