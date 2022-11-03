import { breakpoints } from './breakpoints';

import { dark } from './dark.theme';
import { light } from './light.theme';

export const lightTheme = { breakpoints, ...light };
export const darkTheme = { breakpoints, ...dark };
