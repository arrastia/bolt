import styled from 'styled-components';

import { shake } from 'ui/styles/animations/shake';

const Input = styled('input')<{ isInvalid?: boolean }>`
  background-color: transparent;
  border-color: #ced4da;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 1rem;
  opacity: 0.8;
  outline: none;
  color: #545d68;
  min-height: 38px;
  padding: 0.375rem 0.75rem;
  transition: border-color 100ms ease-in-out;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    border: 1px solid #34d186;
    box-shadow: 0 0 0 0.2rem rgb(52, 209, 134, 0.25);
    opacity: 1;
    transition: border-color 100ms ease-in-out;
  }

  &.error {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    border-color: #ff5c5c;
    color: #ff5c5c;
    transform: translate3d(0, 0, 0);
  }
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  gap: 0.5rem;
`;

const Loading = styled('div')`
  position: absolute;
  right: 2rem;
  top: 50%;
`;

export const Styles = { Container, Loading, Input };
