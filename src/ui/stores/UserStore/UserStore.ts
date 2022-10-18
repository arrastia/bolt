import { atom } from 'recoil';

// import { THEME_KEY } from 'configuration/constants';

// import { getItem, setItem } from 'ui/utils/StorageUtils';

export const tokenState = atom<CryptoKey | string | null>({
  key: 'tokenState',
  default: null
});

export const isDarkModeState = atom<boolean>({
  key: 'isDarkModeState',
  default: false
  // effects: [
  //   ({ onSet, setSelf, trigger }) => {
  //     if (trigger === 'get') setSelf(JSON.parse(getItem<string>(THEME_KEY)));

  //     onSet(newValue => setItem(THEME_KEY, newValue));
  //   }
  // ]
});

export const isMenuOpenState = atom<boolean>({
  key: 'isMenuOpenState',
  default: false
});
