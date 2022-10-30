import { Styles } from './Form.styles';

import { compass, mailbox, phone } from 'assets/stickers';

import { AgreementCheck } from 'ui/components/AgreementCheck';
import { Button } from 'ui/components/Button';
import { Input } from 'ui/components/Input';
import { NativeSelect } from 'ui/components/NativeSelect';
import { Sticker } from 'ui/components/Sticker';
import { InputPhone } from '../InputPhone';

export const Form = () => {
  return (
    <Styles.Form>
      <Input icon={<Sticker data={mailbox} size={25} />} placeholder="Email" />
      <Input icon={<Sticker data={phone} size={25} />} placeholder="Phone" />
      <Input icon={<Sticker data={compass} size={25} />} placeholder="City" />
      <InputPhone />
      <NativeSelect
        options={[
          { id: '1', label: 'option 1', value: 'option 1' },
          { id: '2', label: 'option 2', value: 'option 2' }
        ]}
      />
      <AgreementCheck />
      <Button onClick={event => event.preventDefault()}>Sign up</Button>
    </Styles.Form>
  );
};
