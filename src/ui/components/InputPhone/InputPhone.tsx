import { Fragment, useRef } from 'react';

import { Input } from 'ui/components/Input';
import { NativeSelect } from 'ui/components/NativeSelect';

import type { ChangeEvent } from 'react';
import type { InputProps } from 'ui/components/Input';
import { Styles } from './InputPhone.styles';
import { Sticker } from '../Sticker';
import { compass } from 'assets/stickers';

interface InputPhoneProps extends InputProps {}

export const InputPhone = ({ ...rest }: InputPhoneProps) => {
  const phoneInput = useRef<HTMLInputElement>(null);

  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    // handleSelectCountry(countryCode);
    // phoneInput.current?.focus();
  };

  const renderIcon = () => (
    <Styles.FlagWrapper>
      <Sticker data={compass} size={25} />
      <NativeSelect onChange={handleSelect} options={[]} />
    </Styles.FlagWrapper>
  );

  return <Input icon={renderIcon()} {...rest} />;
};
