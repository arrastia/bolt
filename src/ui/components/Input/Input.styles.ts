import styled from 'styled-components';

import { shake } from 'ui/styles/animations/shake';

const Input = styled('input')`
  font-size: 1rem;
  opacity: 0.8;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${({ theme: { colors } }) => colors.text};
  min-height: 38px;
  flex: 1;

  transition: border-color 100ms ease-in-out;
  /* width: 100%; */

  &:hover {
    opacity: 0.9;
  }
`;

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  position: relative;
  gap: 1rem;

  background-color: transparent;
  border-color: ${({ theme: { colors } }) => colors.borderDefault};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  padding: 0.375rem 0.75rem;

  &:focus-within {
    border: 1px solid #34d186;
    box-shadow: 0 0 0 0.2rem rgb(52, 209, 134, 0.25);
    opacity: 1;
    transition: border-color 100ms ease-in-out;
  }

  &.error {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    border: 1px solid #34d186;
    border-color: #ff5c5c;
    box-shadow: 0 0 0 0.2rem rgb(255, 92, 92, 0.25);
    color: rgb(255, 92, 92, 0.25);
    transform: translate3d(0, 0, 0);
  }
`;

const Loading = styled('div')`
  position: absolute;
  right: 2rem;
  top: 50%;
`;

const Icon = styled('div')`
  background-color: transparent;
  border-color: ${({ theme: { colors } }) => colors.borderDefault};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  padding: 0.5rem;
`;

export const Styles = { Icon, Container, Loading, Input };
