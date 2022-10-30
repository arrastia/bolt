import styled from 'styled-components';

const Badge = styled('span')`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.green};
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 1.25rem;
  justify-content: center;
  position: absolute;
  font-size: 0.85rem;
  right: 10px;
  width: 1.25rem;

  .notification + svg,
  .notification + div {
    margin-left: 22px;
  }
  @media screen and (max-width: 945px) {
    .notification + svg,
    .notification + div {
      display: none;
    }
  }

  &.updates {
    position: relative;
    top: 0;
    right: 0;
    margin-left: auto;
    width: 18px;
    height: 18px;
    font-size: 11px;
  }
`;

export const Styles = { Badge };
