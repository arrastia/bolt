import styled from 'styled-components';

import type { DividerProps } from './@types/Divider.types';

const Divider = styled('hr')<DividerProps>`
  background-color: ${({ theme: { colors } }) => colors.divider};
  border: none;
  height: ${({ direction }) => (direction === 'horizontal' ? '1px' : '100%')};
  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : '1px')};
`;

export const Styles = { Divider };
