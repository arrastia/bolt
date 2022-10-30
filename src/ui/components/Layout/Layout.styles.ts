import styled from 'styled-components';

const Layout = styled('main')`
  background: rgb(255 255 255 / 31%);
  backdrop-filter: saturate(180%) blur(20px);
  height: 100%;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  -webkit-backdrop-filter: saturate(180%) blur(20px);

  @media (min-width: 768px) {
    align-items: flex-start;
    border-radius: 10px;
    box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 80vh;
    justify-content: start;
    margin: auto;
    max-width: 1280px;
    overflow: hidden;
    position: relative;
    transition: all 300ms ease-in-out;
    user-select: none;
    width: 90vw;
  }
`;

const Main = styled('main')`
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }
`;

export const Styles = { Layout, Main };
