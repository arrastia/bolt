import type { MenuOption } from 'ui/components/Menu';
import type { ReactNode } from 'react';
import type { SelectedOption } from 'ui/components/Select';

export interface ValueProps {
  inputValue: string;
  renderOptionLabel: (data?: MenuOption) => ReactNode;
  selectedOption: SelectedOption | null;
}
