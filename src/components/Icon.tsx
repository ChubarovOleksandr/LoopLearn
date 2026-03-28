import React from 'react';

import { useTheme } from '@providers/themeProvider/ThemeProvider';
import { isThemeDark } from '@providers/themeProvider/utils';

interface IconProps {
  icon: React.ElementType;
  whiteThemeColor?: string;
  darkThemeColor?: string;
  isReversed?: boolean;
  size?: string;
}

export const Icon = ({
  icon: IconComponent,
  whiteThemeColor,
  darkThemeColor,
  isReversed,
  size,
}: IconProps) => {
  const { theme } = useTheme();

  const baseColor = isThemeDark(theme) ? (darkThemeColor ?? '#fff') : (whiteThemeColor ?? '#000');

  const reversedColor = isThemeDark(theme)
    ? (darkThemeColor ?? '#000')
    : (whiteThemeColor ?? '#fff');

  const color = isReversed ? reversedColor : baseColor;

  return <IconComponent color={color} size={size} />;
};
