import type { MenuOption } from 'ui/components/Menu';

export interface OptionProps extends MenuOption {
  onSelect: (option: MenuOption) => void;
}
