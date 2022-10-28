import styled from 'styled-components';

import { motion as animated } from 'framer-motion';

const Container = styled('div')`
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  bottom: 0;
  box-shadow: 0px -2px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  left: 0;
  pointer-events: auto;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const Styles = { Container: animated(Container) };
