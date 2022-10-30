import 'styled-components';

import type { Breakpoints } from 'ui/styles/themes/breakpoints';
import type { Colors } from 'ui/styles/themes/colors';
import type { ThemeColors } from 'ui/styles/themes/@types/Theme.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: ThemeColors & Colors;
  }
}
