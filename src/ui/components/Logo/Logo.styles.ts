import styled from 'styled-components';

const Logo = styled('img')`
  cursor: pointer;
  padding: 0 0.5rem;
  transition: transform 0.1s ease-in;
  user-select: none;
  width: clamp(4rem, 15vw, 7rem);

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Logo };
