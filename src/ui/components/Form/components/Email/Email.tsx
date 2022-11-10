import { useRecoilState } from 'recoil';

import { mailbox } from 'assets/stickers';

import { Input } from 'ui/components/Input';
import { Sticker } from 'ui/components/Sticker';

import { formFieldState, isAttemptedState } from 'ui/stores/FormStore';

import type { ChangeEvent } from 'react';

export const Email = () => {
  const [isAttempted, setIsAttempted] = useRecoilState(isAttemptedState);
  const [email, setEmail] = useRecoilState(formFieldState('email'));

  const hasErrors = isAttempted && email === '';

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
    setIsAttempted(false);
  };

  return (
    <Input
      icon={<Sticker data={mailbox} size={35} />}
      onChange={handleChange}
      placeholder="Email"
      status={hasErrors ? 'error' : undefined}
      value={email}
    />
  );
};
