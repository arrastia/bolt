import { Styles } from './Form.styles';

import { compass, mailbox, phone } from 'assets/stickers';

import { AgreementCheck } from 'ui/components/AgreementCheck';
import { Button } from 'ui/components/Button';
import { Input } from 'ui/components/Input';
import { InputPhone } from 'ui/components/InputPhone';
import { Sticker } from 'ui/components/Sticker';

export const Form = () => {
  return (
    <Styles.Form>
      <Input icon={<Sticker data={mailbox} size={35} />} placeholder="Email" />
      <Input icon={<Sticker data={phone} size={35} />} placeholder="Phone" />
      <Input icon={<Sticker data={compass} size={35} />} placeholder="City" />
      <InputPhone />
      <AgreementCheck />
      <Button onClick={event => event.preventDefault()}>Sign up</Button>
    </Styles.Form>
  );
};
