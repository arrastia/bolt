import styled from 'styled-components';

import { fadeIn } from 'ui/styles/animations/fadeIn';

const Icon = styled('svg')`
  animation: ${fadeIn} 0.2s ease-in;
  fill: currentColor;
  height: 16px;
  transition: color 0.2s ease-out;
  width: 14px;
`;

export const Styles = { Icon };
