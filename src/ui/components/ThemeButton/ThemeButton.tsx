import { useRecoilState } from 'recoil';

import { Styles } from './ThemeButton.styles';

import { isDarkModeState } from 'ui/stores/UserStore';

export const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);

  const onToggleTheme = () => setIsDarkMode(prevTheme => !prevTheme);

  return (
    <Styles.ThemeButton onClick={onToggleTheme}>
      <div className={`item-1 ${isDarkMode ? 'sun' : 'moon'}_item-1`} />
      <div className={`item-2 ${isDarkMode ? 'sun' : 'moon'}_item-2`} />
    </Styles.ThemeButton>
  );
};
