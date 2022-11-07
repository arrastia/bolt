import { Styles } from './Form.styles';

import { mailbox } from 'assets/stickers';

import { AgreementCheck } from 'ui/components/AgreementCheck';
import { Button } from 'ui/components/Button';
import { CountrySelect } from './components/CountrySelect';
import { Input } from 'ui/components/Input';
import { InputPhone } from 'ui/components/InputPhone';
import { Sticker } from 'ui/components/Sticker';

import { useSignUp } from './hooks/useSignUp';
import { useRecoilValue } from 'recoil';
import { hasErrorsState } from 'ui/stores/FormStore';

export const Form = () => {
  const hasErrors = useRecoilValue(hasErrorsState);

  const handleSignUp = useSignUp();

  return (
    <Styles.Form>
      <Styles.Title>Become a bolt driver</Styles.Title>
      <Input icon={<Sticker data={mailbox} size={35} />} placeholder="Email" />
      <InputPhone />
      <CountrySelect />
      <AgreementCheck />
      <Button onClick={handleSignUp} status={hasErrors ? 'error' : undefined}>
        Sign up
      </Button>
    </Styles.Form>
  );
};
