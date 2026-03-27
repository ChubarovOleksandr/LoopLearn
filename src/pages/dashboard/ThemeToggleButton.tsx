import { ThemeEnum } from '@providers/themeProvider/enum';
import { useTheme } from '@providers/themeProvider/ThemeProvider';

import moonIcon from '../../assets/img/moon.png';
import sunIcon from '../../assets/img/sun.png';

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`change-theme-button ${theme}`}
      title="Поменять тему"
      onClick={() => setTheme(theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light)}
    >
      {theme === ThemeEnum.Light && <img src={sunIcon} alt="Light theme" />}
      {theme === ThemeEnum.Dark && <img src={moonIcon} alt="Dark theme" />}
    </button>
  );
};
