import { atom, atomFamily, selector } from 'recoil';

import type { Field } from 'ui/components/Form/@types/Form.types';
import type { ICountry } from 'core/entities/Country';

export const isAttemptedState = atom({
  key: 'isAttemptedState',
  default: false
});

export const formFieldState = atomFamily<string, Field>({
  key: 'formFieldState',
  default: ''
});

export const selectedCountryState = atom<ICountry | undefined>({
  key: 'selectedCountryState',
  default: undefined
});

export const hasErrorsState = selector({
  key: 'hasErrorsState',
  get: ({ get }) => {
    const isAttempted = get(isAttemptedState);

    if (!isAttempted) return false;

    const email = get(formFieldState('email'));
    const phone = get(formFieldState('phone'));
    const country = get(formFieldState('phone'));

    return !email || !phone || !country;
  }
});
