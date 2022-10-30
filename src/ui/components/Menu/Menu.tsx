import React from 'react';
import { MenuContainer, MenuItem, MenuList } from './Menu.styles';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface MenuProps {
  isVisible: boolean;
  onClick?: () => void;
  onSelect?: (option: Option) => void;
  options: Option[];
}

export const Menu = ({ isVisible, onClick, onSelect, options }: MenuProps) => {
  const renderMenu = () => (
    <MenuContainer>
      <MenuList onClick={onClick}>
        {options.map(({ id, label, value }) => (
          <MenuItem key={id} onClick={() => onSelect?.({ id, label, value })}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );

  return isVisible ? renderMenu() : null;
};
