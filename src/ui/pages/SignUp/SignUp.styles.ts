import styled from 'styled-components';

const Section = styled('div')`
  /* --vh: 8.44px;
  --explore-drawer-header_height: 74px;

  height: 100%;
  padding: 1rem;

  position: fixed;
  height: calc(100 * var(--vh, 1vh));
  bottom: calc(-100 * var(--vh, 1vh) + var(--explore-drawer-header_height));

  background-color: #ffffff;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  left: 0;
  right: 0;

  transform: translateY(0);
  transition: transform 0.4s ease;

  box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56);

  h1 {
    text-align: center;
  } */
  /* background-color: pink; */
  /* min-height: 50vh; */
`;

const Header = styled('div')`
  box-shadow: 0 1px 0 rgba(46, 59, 66, calc(1 * 0.125));
  cursor: ns-resize;
  flex-shrink: 0;
  padding: 1rem;
  padding-top: 0;
  text-align: center;
`;

export const Styles = { Section, Header };
