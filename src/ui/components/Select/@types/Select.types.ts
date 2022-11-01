import type { InputStatus } from 'ui/components/Input';
import type { MenuOption, MenuOptionStatus } from 'ui/components/Menu';

export type FocusedOption = SelectedOption & { index: number; status?: MenuOptionStatus };
export type SelectedOption = { data?: MenuOption; label?: string; value?: string };

export interface SelectProps {
  getOptionLabel?: (option: MenuOption) => void;
  getOptionValue?: (option: MenuOption) => void;
  onOptionChange?: (data: MenuOption) => any;
  options?: MenuOption[];
  status?: InputStatus;
}
