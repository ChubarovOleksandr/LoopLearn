import { Moon, Sun } from 'lucide-react';

import { Icon } from '@components/Icon';
import { ThemeEnum } from '@providers/themeProvider/enum';
import { useTheme } from '@providers/themeProvider/ThemeProvider';
import { isThemeLight } from '@providers/themeProvider/utils';

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`change-theme-button ${theme}`}
      title="Поменять тему"
      onClick={() => setTheme(isThemeLight(theme) ? ThemeEnum.Dark : ThemeEnum.Light)}
    >
      {isThemeLight(theme) ? <Icon icon={Sun} /> : <Icon icon={Moon} />}
    </button>
  );
};
