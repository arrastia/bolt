import { useState } from 'react';

import { Styles } from './Form.styles';

import { mailbox } from 'assets/stickers';

import { AgreementCheck } from 'ui/components/AgreementCheck';
import { Button } from 'ui/components/Button';
import { CountrySelect } from './components/CountrySelect';
import { Input } from 'ui/components/Input';
import { InputPhone } from 'ui/components/InputPhone';
import { Sticker } from 'ui/components/Sticker';

import type { ButtonStatus } from '../Button/@types/Button.types';

export const Form = () => {
  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>();

  return (
    <Styles.Form>
      <Styles.Title>Become a bolt driver</Styles.Title>
      <Input icon={<Sticker data={mailbox} size={35} />} placeholder="Email" />
      <InputPhone />
      {/* <Input icon={<Sticker data={compass} size={35} />} placeholder="City" /> */}
      <CountrySelect />
      <AgreementCheck />
      <Button
        status={buttonStatus}
        onClick={event => {
          event.preventDefault();
          setButtonStatus('error');
        }}>
        Sign up
      </Button>
    </Styles.Form>
  );
};
