import styled from 'styled-components';
import { motion as animated } from 'framer-motion';

const Backdrop = styled('div')`
  background-color: rgba(51, 51, 51, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  touch-action: none;
  width: 100%;
  z-index: 1;
`;

export const Styles = { Backdrop: animated(Backdrop) };
