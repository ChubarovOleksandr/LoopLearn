import React from 'react';

export enum ThemeEnum {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextType = {
  theme: ThemeEnum;
  setTheme: (theme: string) => void;
};

export const themes = {
  dark: ThemeEnum.dark,
  light: ThemeEnum.light,
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: themes.dark,
  setTheme: () => {},
} as ThemeContextType);
