import { memo } from 'react';

import { Styles } from './Option.styles';

import type { OptionProps } from './@types/Option.types';

export const Option = memo<OptionProps>(({ id, index, label, onSelect, status = 'idle', value }) => {
  const handleSelectOption = () => {
    if (status === 'disabled') return;

    onSelect({ id, index, label, status, value });
  };

  return (
    <Styles.Option className={status} onClick={handleSelectOption}>
      {label}
    </Styles.Option>
  );
});
