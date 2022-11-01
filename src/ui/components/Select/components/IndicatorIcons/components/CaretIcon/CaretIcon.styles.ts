import styled, { css } from 'styled-components';

const IndicatorIcon = styled('div')`
  align-items: center;
  color: #ccc;
  cursor: pointer;
  display: flex;
  height: 100%;

  :hover {
    color: #a6a6a6;
  }
`;

const Caret = styled('div')<{ isActive: boolean; isInvalid?: boolean }>`
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px dashed;
  transition: transform 0.3s ease-in-out, color 0.2s ease-out;

  ${({ theme: { colors }, isActive, isInvalid }) =>
    isActive &&
    css`
      color: ${!isInvalid ? colors.green : colors.red};
      transform: rotate(180deg);
    `}
`;

export const Styles = { Caret, IndicatorIcon };
