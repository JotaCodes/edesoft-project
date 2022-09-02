import { ThemeBody } from './protocols';
import borders from './borders';
import colors from './colors';
import fonts from './fonts';
import spacing from './spacing';
import breakpoints from './breakpoints';

const main: ThemeBody = {
  breakpoints: breakpoints,
  colors: colors,
  fonts: fonts,
  spacing: spacing,
  borders: borders,
};

export default main;
export { main };
