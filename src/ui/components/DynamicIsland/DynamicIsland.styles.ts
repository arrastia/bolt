import styled, { css } from 'styled-components';

import { Flex } from 'ui/styles/components/Flex';
import { Text } from 'ui/styles/components/Text';

const Island = styled('div')`
  align-items: stretch;
  background: ${({ theme }) => theme.colors.backgroundFallback};
  /* border-radius: 1000px; */
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  color: black;
  display: flex;
  /* min-height: 56px; */
  flex-direction: column;

  margin: auto;
  align-self: center;

  /* transform: translate3d(0, 0, 0); */
  color: ${({ theme }) => theme.colors.text};
  /* transition: box-shadow 0.2s ease, color 0.2s ease, transform 0.2s, height 2s ease; */
  /* transition: border-radius 2s ease;
  will-change: box-shadow, color, transform, height; */
  will-change: border-radius, box-shadow, color, transform, height;
  /* transition: border-radius 2s ease, box-shadow 0.2s ease, color 0.2s ease, transform 0.2s, height 2s ease; */

  &.idle {
    animation: collapse 200ms ease-out;
    border-radius: 1000px;
    height: 56px;
    width: 285px;
  }

  &.expanded {
    animation: expand 200ms ease;
    border-radius: 25px;
    height: 450px;
    width: 100%;
  }

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.99);
    transition: transform 0.2s;
  }

  @keyframes collapse {
    0% {
      border-radius: 25px;
    }
    15% {
      height: 56px;
      width: 285px;
    }
    100% {
      border-radius: 1000px;
      height: 56px;
      width: 285px;
    }
  }

  @keyframes expand {
    0% {
      height: 56px;
      width: 285px;
      border-radius: 25px;
    }
    90% {
      height: 450px;
      width: 100%;
    }
    100% {
      border-radius: 25px;
      height: 450px;
      width: 100%;
    }
  }
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
  /* border: 1px solid #dddddd; */
  border: none;
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

const MiniLogo = styled('img')`
  width: 16px;
`;

export const Styles = {
  ActionButton,
  Content,
  Island,
  ActionButtons,
  Title,
  Subtitle,
  Search,
  Button,
  MiniLogo
};
