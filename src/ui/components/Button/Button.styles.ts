import styled from 'styled-components';

import type { ButtonAppearance } from './@types/Button.types';

const Button = styled('button')<{ appearance?: ButtonAppearance }>`
  align-items: center;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: bold;
  justify-content: space-around;
  margin: 0;
  opacity: 0.85;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 35px 1px;
  overflow: visible;
  padding: 0.65rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 100ms ease-out;
  user-select: none;

  -moz-border-radius: 7px;
  -moz-transition: all 100ms ease-out;
  -moz-user-select: none;
  -o-transition: all 100ms ease-out;
  -webkit-border-radius: 7px;
  -webkit-transition: all 100ms ease-out;
  -webkit-user-select: none;

  &:active {
    transform: scale(0.95);
    transition: all 100ms ease-in;
  }

  &:hover {
    background: #4450d5;
    transition: all 100ms ease-in;
    opacity: 1;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.light {
    background: transparent;
    color: #34d186;
  }

  &.default:hover {
    background: var(--hover);
  }

  &.primary {
    background: #34d186;
    color: white;

    &:hover {
      opacity: 1;
      transition: all 100ms ease-in;
    }
  }

  &.secondary {
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgb(255 255 255 / 31%);
    /* border: 2px solid #34d186; */
  }
`;

export const Styles = { Button };
