import { Fragment, memo } from 'react';
import { useRecoilValue } from 'recoil';

import { Styles } from './Option.styles';

import { Divider } from 'ui/components/Divider';

import { isSelectedState } from '../../store/MenuStore';

import type { OptionProps } from './@types/Option.types';

export const Option = memo<OptionProps>(({ icon, id, index, label, onSelect, status = 'idle', value }) => {
  const isSelected = useRecoilValue(isSelectedState(id));

  const handleSelectOption = () => {
    if (status === 'disabled') return;

    onSelect?.({ id, index, label, status, value });
  };

  const renderIcon = () => (
    <Fragment>
      <Styles.Icon>{icon}</Styles.Icon>
      <Divider direction="vertical" />
    </Fragment>
  );

  return (
    <Styles.Option className={isSelected ? 'selected' : status} onClick={handleSelectOption}>
      {icon ? renderIcon() : null}
      <Styles.Text>{label}</Styles.Text>
    </Styles.Option>
  );
});
