import { useGetRecoilValueInfo_UNSTABLE, useSetRecoilState } from 'recoil';

import { formFieldState, isAttemptedState } from 'ui/stores/FormStore';

import type { Field } from '../@types/Form.types';

export const useSignUp = () => {
  const setIsAttempted = useSetRecoilState(isAttemptedState);

  const getInfo = useGetRecoilValueInfo_UNSTABLE();

  const isEmpty = (name: Field) => getInfo(formFieldState(name)).loadable?.contents === '';

  const handleSignUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsAttempted(true);

    if (!isEmpty('email') && !isEmpty('phone') && !isEmpty('city')) {
      console.log('User created');
    }
  };

  return handleSignUp;
};
