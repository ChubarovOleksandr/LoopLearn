import { useContext } from 'react';
import { ThemeContext, ThemeEnum } from '../context/ThemeContext';

interface Props {
  iconForWhiteTheme: string;
  iconForDarkTheme: string;
}

export const srcThemeSwapper = ({ iconForWhiteTheme, iconForDarkTheme }: Props) => {
  const { theme } = useContext(ThemeContext);
  return theme === ThemeEnum.dark ? iconForDarkTheme : iconForWhiteTheme;
};
