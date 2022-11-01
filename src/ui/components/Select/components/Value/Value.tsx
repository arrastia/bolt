import { Styles } from './Value.styles';

import type { ValueProps } from './@types/Value.types';

export const PLACEHOLDER_DEFAULT = 'Select option..';

export const Value = ({ inputValue, renderOptionLabel, selectedOption }: ValueProps) => {
  if (inputValue) return null;

  if (!selectedOption) return <Styles.Placeholder>{PLACEHOLDER_DEFAULT}</Styles.Placeholder>;

  return <Styles.SingleValue>{renderOptionLabel(selectedOption?.data)}</Styles.SingleValue>;
};
