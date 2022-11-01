import styled from 'styled-components';

const List = styled('ul')<{ height: number; width: number }>`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  display: block;
  height: ${({ height }) => height}px;
  margin: 0;
  /* max-height: 100%; */
  max-width: 100%;
  overflow: auto;
  padding: 0;
  position: absolute;
  width: ${({ width }) => width}px;
  will-change: height, width;
  z-index: 1;

  &.hidden {
    display: none;
  }

  &.top {
    bottom: 100%;
    margin-bottom: 0.25rem;
  }

  &.bottom {
    margin-top: 0.25rem;
    top: 100%;
  }

  &.left {
    margin-right: 0.25rem;
    right: 100%;
  }

  &.right {
    left: 100%;
    margin-left: 0.25rem;
  }
`;

const NoOptionsMsg = styled('div')``;

export const Styles = { List, NoOptionsMsg };
