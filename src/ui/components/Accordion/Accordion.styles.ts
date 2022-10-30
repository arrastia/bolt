import styled from 'styled-components';

import { ArrowIcon } from './components/ArrowIcon';

const Accordion = styled('div')`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const CollapseIcon = styled(ArrowIcon)<{ isCollapsed: boolean }>`
  cursor: pointer;
  fill: ${({ theme: { colors } }) => colors.green};
  height: 1.25rem;
  stroke: ${({ theme: { colors } }) => colors.green};
  transform: ${({ isCollapsed }) => (isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)')};
  width: 1.25rem;
`;

const Label = styled('h3')`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Menu = styled('ul')<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: ${({ isCollapsed }) => (isCollapsed ? '0vh' : '100vh')};
  opacity: ${({ isCollapsed }) => (isCollapsed ? 0 : 1)};
  transition: max-height 500ms, opacity 500ms;
  transition-timing-function: ${({ isCollapsed }) => (isCollapsed ? 'cubic-bezier(0.17, 0.04, 0.03, 0.94)' : 'ease-in')};
  white-space: nowrap;
`;

const Item = styled('li')`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  font-weight: 400;
  list-style: none;
  opacity: 0.8;
  margin: 0;
  padding: 10px;
  position: relative;
  text-decoration: none;
  transition: background-color 300ms ease-in;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.glass};
    transition: background-color 300ms ease-out;
  }
`;

export const Styles = { Accordion, CollapseIcon, Label, Menu, Item };
