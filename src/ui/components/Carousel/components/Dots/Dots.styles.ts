import styled from 'styled-components';

const CIRCLE_SIZE = 15;
const WIDTH_EXTENSION = 1.8;

const OrderedList = styled('ol')`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
`;

const Circle = styled('li')`
  border-radius: ${`${CIRCLE_SIZE / 2}px`};
  display: inline-block;
  height: ${CIRCLE_SIZE}px;
  margin: ${`${CIRCLE_SIZE / 2}px`};
  width: ${CIRCLE_SIZE}px;
`;

const Dot = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  cursor: pointer;
`;

const Indicator = styled(Circle)<{ activeIndex: number }>`
  background-color: ${({ theme: { colors } }) => colors.backgroundContrast};
  left: ${({ activeIndex }) => `${activeIndex * (CIRCLE_SIZE * 2)}px`};
  position: absolute;
  transition: all 300ms ease-in-out;

  &.indicator-width {
    animation: indicatorWidth 300ms linear;

    @keyframes indicatorWidth {
      from {
        width: ${CIRCLE_SIZE}px;
      }
      50% {
        width: ${CIRCLE_SIZE * WIDTH_EXTENSION}px;
      }
      to {
        width: ${CIRCLE_SIZE}px;
      }
    }
  }
`;

const Component = styled('div')`
  border-radius: calc(1rem + 10px);
  margin: auto;
  padding: 0 1rem;
  transition: background-color 300ms ease-in;
  width: fit-content;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.backgroundHover};
    transition: background-color 300ms ease-out;
  }
`;

export const Styles = { Circle, Component, Dot, Indicator, OrderedList };
