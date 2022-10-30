import styled, { keyframes } from 'styled-components';

export const sync = keyframes`
  33% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Spinner = styled('div')`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  width: fit-content;
`;

const Dot = styled('span')`
  animation: ${sync} 1s ease-in-out infinite;
  background-color: black;
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  margin: 5px;
  width: 15px;
`;

export const Styles = { Spinner, Dot };
