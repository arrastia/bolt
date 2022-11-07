import { atom, selectorFamily } from 'recoil';

export const selectedOptionState = atom({
  key: 'selectedOptionState',
  default: ''
});

export const isSelectedState = selectorFamily({
  key: 'isSelectedState',
  get:
    (id: string) =>
    ({ get }) =>
      get(selectedOptionState) === id
});
