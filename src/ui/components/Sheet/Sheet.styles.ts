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

const Container = styled('div')`
  background: ${({ theme: { colors } }) => colors.background};
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

const Content = styled('div')`
  flex: 1;
  overflow: auto;
  position: relative;
`;

const Header = styled('div')`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const HeaderWrapper = styled('div')`
  width: 100%;
`;

const Indicator = styled('span')`
  background-color: #ddd;
  border-radius: 99px;
  height: 4px;
  width: 18px;
`;

const Wrapper = styled('div')`
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const HeaderContent = styled('div')`
  box-shadow: 0 1px 0 rgba(46, 59, 66, calc(1 * 0.125));
  cursor: ns-resize;
  flex-shrink: 0;
  padding: 1rem;
  padding-top: 0;
  text-align: center;
`;

export const Styles = {
  Backdrop: animated(Backdrop),
  Container: animated(Container),
  Content: animated(Content),
  Header,
  HeaderContent,
  HeaderWrapper: animated(HeaderWrapper),
  Indicator: animated(Indicator),
  Wrapper
};
