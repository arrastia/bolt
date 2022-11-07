import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { Styles } from './Menu.styles';

import { MenuList } from './components/MenuList';

import { useMenuPositioner } from './hooks/useMenuPositioner';

import { selectedOptionState } from './store/MenuStore';

import type { MenuOption, MenuProps } from './@types/Menu.types';
import { createPortal } from 'react-dom';
import { useMenuPosition } from './hooks/useMenuPosition/useMenuPosition';

const menuPortal = document.getElementById('menu') as HTMLElement;
const menuItemSize = 35;

const isArrayWithLength = <T,>(value: T): boolean => Array.isArray(value) && !!value.length;

export const Menu = ({ appendTo, isOpen, onMenuMouseDown, onSelect, options }: MenuProps) => {
  const setSelectedOption = useSetRecoilState(selectedOptionState);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const menuHeight = useMenuPositioner({ menuItemSize, isOpen, menuOptionsLength: options.length, menuRef });
  const menuStyles = useMenuPosition(appendTo);

  const handleSelect = (option: MenuOption) => {
    onSelect?.(option);
    setSelectedOption(option.id);
  };

  const renderMenu = () => (
    <Styles.MenuWrapper
      hideNoOptionsMsg={isOpen && !isArrayWithLength(options)}
      isOpen={isOpen}
      onMouseDown={onMenuMouseDown}
      ref={menuRef}
      style={menuStyles}>
      <MenuList height={menuHeight} isLoading={false} onSelect={handleSelect} options={options} width={400} />
    </Styles.MenuWrapper>
  );

  return appendTo ? createPortal(renderMenu(), menuPortal) : renderMenu();
};
