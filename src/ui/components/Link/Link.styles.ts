import styled from 'styled-components';

const Link = styled('a')`
  color: #34d186;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  &::after {
    background: #249e64;
    content: '';
    display: block;
    height: 1px;
    transition: 300ms;
    width: 0px;
  }

  &:hover {
    color: #249e64;

    &::after {
      width: 100%;
    }
  }
`;

export const Styles = { Link };
