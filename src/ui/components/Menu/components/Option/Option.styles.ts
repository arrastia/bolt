import styled from 'styled-components';

const Option = styled('li')`
  display: flex;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  &.focused,
  &:hover:not(.disabled):not(.selected) {
    background-color: rgb(52, 209, 134, 0.25);
  }

  &.selected {
    background-color: ${({ theme: { colors } }) => colors.darkGreen};
    color: ${({ theme: { colors } }) => colors.white};
  }

  &.disabled {
    opacity: 0.35;
  }
`;

const Icon = styled('span')`
  min-width: 50px;
  text-align: right;
`;

const Text = styled('span')`
  display: block;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  will-change: top;
`;

export const Styles = { Option, Icon, Text };
