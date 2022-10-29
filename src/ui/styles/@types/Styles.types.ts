import 'styled-components';

import type { Breakpoints } from 'ui/styles/themes/breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
  }
}
