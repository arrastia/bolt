import styled, { css } from 'styled-components';

import { Flex } from 'ui/styles/components/Flex';
import { Text } from 'ui/styles/components/Text';

const Island = styled('div')<{ status: 'idle' | 'expanded' }>`
  align-items: stretch;
  background: white;
  border-radius: 1000px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  color: black;
  display: flex;
  min-height: 56px;
  flex-direction: column;
  min-width: 285px;
  transform: translate3d(0, 0, 0);
  height: 100%;

  ${({ status }) =>
    status === 'expanded' &&
    css`
      border-radius: 25px;
    `}
`;

const Content = styled(Flex)`
  align-items: center;
  display: flex;
  flex: 1;
  min-width: 100px;
  width: 100%;
`;

const ActionButtons = styled('div')`
  -webkit-box-align: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  background: transparent;
  border-radius: 0px;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  min-width: 0px;
  outline: none;
  padding: 0px;
  position: relative;
  text-align: inherit;
  text-decoration: none;
  touch-action: manipulation;
  transition: none 0s ease 0s;
  user-select: none;
`;

const ActionButton = styled('button')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  background: transparent;
  height: 36px;
  justify-content: center;
  width: 36px;
  border: 1px solid #dddddd;
  border-radius: 25px;
  margin: 0 10px;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in-out;
  }
`;

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const Subtitle = styled(Text)`
  color: #717171;
  display: flex;
  font-size: 12px;
  line-height: 16px;
`;

const Search = styled('div')`
  padding: 0 16px 0 20px;
`;

const Button = styled('div')`
  -webkit-box-align: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  background: transparent;
  border-radius: 0px;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  height: 100%;
  line-height: inherit;
  margin: 0px;
  min-width: 0px;
  outline: none;
  padding: 0px;
  position: relative;
  text-align: inherit;
  text-decoration: none;
  touch-action: manipulation;
  transition: none 0s ease 0s;
  user-select: none;
  width: 100%;
`;

export const Styles = {
  ActionButton,
  Content,
  Island,
  ActionButtons,
  Title,
  Subtitle,
  Search,
  Button
};
