import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilValue } from 'recoil';

import { Suspense } from 'react';

import { Styles } from './Form.styles';

import { AgreementCheck } from 'ui/components/AgreementCheck';
import { Button } from 'ui/components/Button';
import { CountrySelect } from './components/CountrySelect';
import { Email } from './components/Email';
import { Input } from 'ui/components/Input';
import { PhoneSelect } from './components/PhoneSelect';

import { useSignUp } from './hooks/useSignUp';

import { hasErrorsState } from 'ui/stores/FormStore';

export const Form = () => {
  const hasErrors = useRecoilValue(hasErrorsState);

  const handleSignUp = useSignUp();

  return (
    <Styles.Form>
      <Styles.Title>Become a bolt driver</Styles.Title>
      <Email />
      <PhoneSelect />
      <ErrorBoundary fallback={<Input placeholder="Error loading input" readOnly={true} status="error" />}>
        <Suspense fallback={<Input placeholder="Loading..." readOnly={true} status="pending" />}>
          <CountrySelect />
        </Suspense>
      </ErrorBoundary>
      <AgreementCheck />
      <Button onClick={handleSignUp} status={hasErrors ? 'error' : undefined}>
        Sign up
      </Button>
    </Styles.Form>
  );
};
