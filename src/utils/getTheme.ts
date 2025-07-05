import { getDataFromLS } from './LS';
import { ThemeEnum, themes } from '../context/ThemeContext';

export const getTheme = () => {
  const theme = getDataFromLS('theme');
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia(`(prefers-color-scheme: ${ThemeEnum.dark})`);
  return userMedia.matches ? themes.dark : themes.light;
};
