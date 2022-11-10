import styled from 'styled-components';

const Container = styled('div')`
  align-items: center;
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`;

export const Styles = { Container };
