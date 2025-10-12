import { useContext } from 'react';

import { ThemeContext, ThemeEnum } from '@context/ThemeContext';

import moonIcon from '../../assets/img/moon.png';
import sunIcon from '../../assets/img/sun.png';

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`change-theme-button ${theme}`}
      title="Поменять тему"
      onClick={() => setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light)}
    >
      {theme === ThemeEnum.light && <img src={sunIcon} alt="Light theme" />}
      {theme === ThemeEnum.dark && <img src={moonIcon} alt="Dark theme" />}
    </button>
  );
};
