import { Styles } from './MenuList.styles';

import { Option } from '../Option';

const LOADING_MSG_DEFAULT = 'Loading..';
const NO_OPTIONS_MSG_DEFAULT = 'No options';

const isArrayWithLength = <T,>(value: T): boolean => Array.isArray(value) && !!value.length;

export const MenuList = ({ height, isLoading, options, width }: { height: number; isLoading: boolean; options: any[]; width: number }) => {
  if (isLoading) return <Styles.NoOptionsMsg>{LOADING_MSG_DEFAULT}</Styles.NoOptionsMsg>;

  return (
    <Styles.List height={height} width={width}>
      {options.map((option: any) => (
        <Option key={option.id} {...option} />
      ))}
      {!isArrayWithLength(options) ? <Styles.NoOptionsMsg>{NO_OPTIONS_MSG_DEFAULT}</Styles.NoOptionsMsg> : null}
    </Styles.List>
  );
};
