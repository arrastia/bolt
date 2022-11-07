import styled from 'styled-components';
import { motion as animated } from 'framer-motion';

const Content = styled('div')`
  flex: 1;
  overflow: auto;
  position: relative;
  background: ${({ theme: { colors } }) => colors.background};
`;

export const Styles = { Content: animated(Content) };
