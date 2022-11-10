import styled from 'styled-components';

const Icon = styled('img')`
  aspect-ratio: auto 20 / 20;
  height: auto;
  max-width: 100%;
  width: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Styles = { Icon };
