import styled from 'styled-components';
import { motion as animated } from 'framer-motion';

const HeaderWrapper = styled('div')`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.background};
`;

const Header = styled('div')`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.background};
`;

const Indicator = styled('span')`
  background-color: #ddd;
  border-radius: 99px;
  height: 4px;
  width: 18px;
`;

export const Styles = { Header, HeaderWrapper: animated(HeaderWrapper), Indicator: animated(Indicator) };
