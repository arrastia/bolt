import { Fragment, useRef, useState } from 'react';

import { Styles } from './InputPhone.styles';

import { phone } from 'assets/stickers';

import { Input } from 'ui/components/Input';
import { Menu } from 'ui/components/Menu';
import { NativeSelect } from 'ui/components/NativeSelect';
import { Sticker } from 'ui/components/Sticker';

import type { ChangeEvent } from 'react';
import type { CountryCode } from 'core/entities/Country';
import type { InputProps } from 'ui/components/Input';

interface InputPhoneProps extends InputProps {}

export const InputPhone = ({ ...rest }: InputPhoneProps) => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneInput = useRef<HTMLInputElement>(null);

  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    // handleSelectCountry(countryCode);
    phoneInput.current?.focus();
  };

  const toggleMenu = () => setIsPanelVisible(prevState => !prevState);

  const renderIcon = () => (
    <Styles.FlagWrapper>
      <Sticker data={phone} size={35} />
      <NativeSelect
        onChange={handleSelect}
        options={[
          { label: 'Russia', value: '+7', id: 'russia' },
          { label: 'USA', value: '+1', id: 'usa' }
        ]}
      />
    </Styles.FlagWrapper>
  );

  return (
    <div style={{ position: 'relative' }}>
      <Input icon={renderIcon()} onClick={toggleMenu} placeholder="Phone number" ref={phoneInput} {...rest} />
      <Menu
        isOpen={isPanelVisible}
        options={[
          { label: 'Russia', value: '+7', id: 'russia' },
          { label: 'USA', value: '+1', id: 'usa' }
        ]}
      />
    </div>
  );
};
