import styled from 'styled-components';

const Container = styled('div')<{ size: number }>`
  fill: aliceblue;
  height: ${({ size }) => `${size}px`};
  transition: transform 100ms ease-out;
  width: ${({ size }) => `${size}px`};

  &:active {
    transition: transform 100ms ease-in;
    transform: scale(0.85);
  }
`;

export const Styles = { Container };
