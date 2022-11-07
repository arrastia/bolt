import type { InputStatus } from 'ui/components/Input';
import type { MenuOption, MenuOptionStatus } from 'ui/components/Menu';

export type FocusedOption = SelectedOption & { index: number; status?: MenuOptionStatus };
export type OptionLabelCallback = (option: MenuOption) => string;
export type SelectedOption = { data?: MenuOption };

export interface SelectProps {
  getOptionLabel?: OptionLabelCallback;
  getOptionValue?: (option: MenuOption) => void;
  onOptionChange?: (option: MenuOption) => any;
  options?: MenuOption[];
  status?: InputStatus;
}
