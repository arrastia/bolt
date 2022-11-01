import styled from 'styled-components';

const IndicatorIconsWrapper = styled('div')`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-shrink: 0;
  gap: 0.5rem;
`;

const IndicatorIcon = styled('div')`
  align-items: center;
  color: #ccc;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 0.9375rem;

  &:hover {
    color: #a6a6a6;
  }
`;

const Separator = styled('div')`
  align-self: stretch;
  background-color: #ced4da;
  margin: 0;
  width: 1px;
`;

export const Styles = { IndicatorIcon, IndicatorIconsWrapper, Separator };
