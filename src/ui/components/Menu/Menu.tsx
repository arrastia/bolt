import { useRef } from 'react';

import { Styles } from './Menu.styles';

import { MenuList } from './components/MenuList';

import { useMenuPositioner } from './hooks/useMenuPositioner';

import type { MenuProps } from './@types/Menu.types';

const menuItemSize = 35;

const isArrayWithLength = <T,>(value: T): boolean => Array.isArray(value) && !!value.length;

export const Menu = ({ isOpen, onMenuMouseDown, options }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const menuHeight = useMenuPositioner({ menuItemSize, isOpen, menuOptionsLength: options.length, menuRef });

  return (
    <Styles.MenuWrapper hideNoOptionsMsg={isOpen && !isArrayWithLength(options)} isOpen={isOpen} onMouseDown={onMenuMouseDown} ref={menuRef}>
      <MenuList height={menuHeight} isLoading={false} options={options} width={400} />
    </Styles.MenuWrapper>
  );
};
