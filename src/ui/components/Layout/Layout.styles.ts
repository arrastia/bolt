import styled from 'styled-components';

const Layout = styled('main')`
  background: rgb(255 255 255 / 31%);
  backdrop-filter: saturate(180%) blur(20px);
  /* box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56); */
  height: 100%;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;

export const Styles = { Layout };
