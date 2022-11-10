import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';

import { Input } from 'ui/components/Input';
import { InputPhone } from 'ui/components/InputPhone';

import { formFieldState, isAttemptedState } from 'ui/stores/FormStore';

import type { ChangeEvent } from 'react';

export const PhoneSelect = () => {
  const [isAttempted, setIsAttempted] = useRecoilState(isAttemptedState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(formFieldState('phone'));

  const hasErrors = isAttempted && phoneNumber === '';

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(value);
    setIsAttempted(false);
  };

  return (
    <ErrorBoundary fallback={<Input placeholder="Error loading input" readOnly={true} status="error" />}>
      <Suspense fallback={<Input placeholder="Loading..." readOnly={true} status="pending" />}>
        <InputPhone onChange={handleChange} placeholder="Phone" status={hasErrors ? 'error' : undefined} />
      </Suspense>
    </ErrorBoundary>
  );
};
