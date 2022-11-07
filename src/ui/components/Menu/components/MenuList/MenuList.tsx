import { Styles } from './MenuList.styles';

import { Option } from '../Option';

import type { MenuListProps } from './@types/MenuList.types';

const LOADING_MSG_DEFAULT = 'Loading..';
const NO_OPTIONS_MSG_DEFAULT = 'No options';

const isArrayWithLength = <T,>(value: T): boolean => Array.isArray(value) && !!value.length;

export const MenuList = ({ height, isLoading, onSelect, options, width }: MenuListProps) => {
  if (isLoading) return <Styles.NoOptionsMsg>{LOADING_MSG_DEFAULT}</Styles.NoOptionsMsg>;

  return (
    <Styles.List height={height} width={width}>
      {options.map(option => (
        <Option key={option.id} onSelect={onSelect} {...option} />
      ))}
      {!isArrayWithLength(options) ? <Styles.NoOptionsMsg>{NO_OPTIONS_MSG_DEFAULT}</Styles.NoOptionsMsg> : null}
    </Styles.List>
  );
};
