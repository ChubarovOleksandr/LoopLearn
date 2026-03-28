import { ThemeEnum } from './enum';

export const getSystemTheme = (): ThemeEnum =>
  window.matchMedia(`(prefers-color-scheme: ${ThemeEnum.Dark})`).matches
    ? ThemeEnum.Dark
    : ThemeEnum.Light;

export const isThemeDark = (theme: ThemeEnum) => theme === ThemeEnum.Dark;
export const isThemeLight = (theme: ThemeEnum) => theme === ThemeEnum.Light;
