import { ImageNameEnum } from '@enums/imageNameEnum';
import { ThemeEnum } from '@providers/themeProvider/enum';
import { useTheme } from '@providers/themeProvider/ThemeProvider';

interface ImageProps {
  name: ImageNameEnum;
  alt: string;
  isReverse?: boolean;
  className?: string;
}

/**
 * Return image element for supporting theme showing
 * @param name - file name after prefix black/white-. Used in src to search the file
 * @param alt - Alternative text, if img wasn't loaded
 * @param className - Classname for the image element
 * @param isReverse - Flag which show should component return reverse result for current theme
 * @constructor
 */

const Image = ({ name, alt, className, isReverse = false }: ImageProps) => {
  const { theme } = useTheme();

  // TODO CHANGE ON LUCIDE ICONS

  const iShowingBlackIcons = isReverse ? theme === ThemeEnum.Dark : theme !== ThemeEnum.Dark;
  const themePrefix = iShowingBlackIcons ? 'black' : 'white';
  return <img src={`/assets/img/${themePrefix}-${name}.png`} alt={alt} className={className} />;
};

export default Image;
