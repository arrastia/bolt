import type { MenuOption } from 'ui/components/Menu';

export interface MenuListProps {
  height: number;
  isLoading: boolean;
  onSelect?: (option: MenuOption) => void;
  options: MenuOption[];
  width: number;
}
