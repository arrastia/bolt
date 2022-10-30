import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import { Styles } from './NativeSelect.styles';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface NativeSelectProps extends ComponentPropsWithoutRef<'select'> {
  isDisabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const NativeSelect = ({ isDisabled, onChange, options }: NativeSelectProps) => {
  return (
    <Styles.Select disabled={isDisabled} onChange={onChange}>
      {options.map(({ id, label, value }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </Styles.Select>
  );
};
