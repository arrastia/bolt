import styled, { css } from 'styled-components';

import { shake } from 'ui/styles/animations/shake';

import type { HTMLAttributes } from 'react';
import type { SelectProps } from './@types/Select.types';

interface ControlWrapperProps extends Pick<SelectProps, 'status'> {
  isFocused: boolean;
  isInvalid?: boolean;
}

const SELECT_WRAPPER_ATTRS: HTMLAttributes<HTMLDivElement> = { 'aria-haspopup': 'listbox', role: 'combobox' };

const SelectWrapper = styled.div.attrs(SELECT_WRAPPER_ATTRS)`
  position: relative;
`;

const ValueWrapper = styled.div`
  /* align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0%;
  overflow: hidden; */
  /* padding: 0.375rem 0.75rem; */
  position: relative;
`;

const ControlWrapper = styled.div<ControlWrapperProps>`
  align-items: center;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  outline: 0;
  position: relative;

  ${({ status, isFocused, isInvalid, theme: { colors } }) => css`
    border-color: ${isInvalid ? colors.red : isFocused ? colors.green : '#ced4da'};
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    min-height: 38px;
    transition: box-shadow 0.2s ease-out, border-color 0.2s ease-out;

    ${status === 'disabled' && 'pointer-events:none;user-select:none;'}
    ${isFocused && `box-shadow: 0 0 0 0.2rem ${isInvalid ? colors.red : 'rgb(52, 209, 134, 0.25)'};`}
    ${isInvalid &&
    css`
      animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      backface-visibility: hidden;
      border-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.red};
      transform: translate3d(0, 0, 0);
    `}
  `}
`;

export const Styles = { ControlWrapper, SelectWrapper, ValueWrapper };
