import React, { useEffect, useState } from 'react';

import { ThemeContext } from '@context/ThemeContext';
import { getTheme } from '@utils/getTheme';
import { setDataToLS } from '@utils/LS';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    setDataToLS('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
