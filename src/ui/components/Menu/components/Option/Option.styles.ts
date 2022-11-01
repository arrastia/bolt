import styled from 'styled-components';

const Option = styled('li')`
  display: block;
  overflow: hidden;
  padding: 0.375rem 0.75rem;
  text-align: left;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  will-change: top;
  -webkit-tap-highlight-color: transparent;

  &.focused,
  &:hover:not(.disabled):not(.selected) {
    background-color: rgb(52, 209, 134, 0.25);
  }

  &.selected {
    background-color: ${({ theme: { colors } }) => colors.darkGreen};
    color: ${({ theme: { colors } }) => colors.text};
  }

  &.disabled {
    opacity: 0.35;
  }
`;

export const Styles = { Option };
