import styled from 'styled-components';
import { motion as animated } from 'framer-motion';

const Content = styled('div')`
  flex: 1;
  overflow: auto;
  position: relative;
`;

export const Styles = { Content: animated(Content) };
