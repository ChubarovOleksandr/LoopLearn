/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { SetState } from 'src/interface/setState';

import { ThemeEnum } from './enum';
import { getSystemTheme } from './utils';

interface ThemeContextInterface {
  theme: ThemeEnum;
  setTheme: SetState<ThemeEnum>;
}

const ThemeContext = createContext<ThemeContextInterface>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
