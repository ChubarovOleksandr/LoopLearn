import { ThemeEnum } from './enum';

export const getSystemTheme = (): ThemeEnum =>
  window.matchMedia(`(prefers-color-scheme: ${ThemeEnum.Dark})`).matches
    ? ThemeEnum.Dark
    : ThemeEnum.Light;
