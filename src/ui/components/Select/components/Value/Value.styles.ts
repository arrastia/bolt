import styled, { css } from 'styled-components';

const SINGLE_VALUE_BASE_STYLE = css`
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
`;

const SingleValue = styled.div`
  ${SINGLE_VALUE_BASE_STYLE}

  max-width: calc(100% - 0.5rem);
`;

const Placeholder = styled.div`
  ${SINGLE_VALUE_BASE_STYLE}

  color: #6E7276;
`;

export const Styles = { Placeholder, SingleValue };
