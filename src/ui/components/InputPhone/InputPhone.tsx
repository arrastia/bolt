import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { Styles } from './InputPhone.styles';

import { phone } from 'assets/stickers';

import { Input } from 'ui/components/Input';
import { Menu } from 'ui/components/Menu';
import { NativeSelect } from 'ui/components/NativeSelect';
import { Sticker } from 'ui/components/Sticker';

import { countriesState } from 'ui/stores/MapStore';

import { useInputPhone } from './hooks/useInputPhone/useInputPhone';

import type { ChangeEvent } from 'react';
import type { CountryCode } from 'core/entities/Country';
import type { InputProps } from 'ui/components/Input';
import { Divider } from '../Divider';

interface InputPhoneProps extends InputProps {}

export const InputPhone = ({ onChange, status, ...rest }: InputPhoneProps) => {
  const isDisabled = status === 'disabled';

  const countries = useRecoilValue(countriesState);

  const ref = useRef<HTMLDivElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  const { handleInputChange, handleSelectCountry, isPanelVisible, phoneNumber, togglePanel } = useInputPhone();

  const handleToggleList = () => {
    if (!isDisabled) togglePanel(!isPanelVisible);
  };

  // const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!/^[\d ()+-]+$/.test(value)) return;

    handleInputChange(value);
    onChange?.(event);
  };

  const handleSelect = (countryCode: CountryCode) => {
    handleSelectCountry(countryCode);

    phoneInput.current?.focus();
  };

  const renderIcon = () => (
    <Styles.FlagWrapper>
      <Sticker data={phone} onClick={handleToggleList} size={35} />
      <NativeSelect
        onChange={event => handleSelect(event.target.value as CountryCode)}
        options={[
          { label: 'Russia', value: '+7', id: 'russia' },
          { label: 'USA', value: '+1', id: 'usa' }
        ]}
      />
    </Styles.FlagWrapper>
  );

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Input
        icon={renderIcon()}
        onChange={handleChange}
        placeholder="Phone number"
        ref={phoneInput}
        status={status}
        type="tel"
        value={phoneNumber}
        {...rest}
      />
      <Menu
        appendTo={ref}
        isOpen={isPanelVisible}
        onSelect={({ value }) => handleSelect(value as CountryCode)}
        options={countries.map(({ countryCode, id, name, phoneCode }) => ({ icon: phoneCode, id, label: name, value: countryCode }))}
      />
    </div>
  );
};
