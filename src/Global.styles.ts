import { createGlobalStyle } from 'styled-components';

import { EuclidCircularBRegular, EuclidCircularBSemibold } from 'assets/fonts';

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'EuclidCircularBRegular';
      font-weight: 400;
      src: local('EuclidCircularBRegular'), url(${EuclidCircularBRegular}) format('truetype');
    }
    
    @font-face {
      font-family: 'EuclidCircularBSemibold';
      font-weight: 700;
      src: local('EuclidCircularBSemibold'), url(${EuclidCircularBSemibold}) format('truetype');
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: ${({ theme: { colors } }) => colors.backgroundFallback};
      color: ${({ theme: { colors } }) => colors.text};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      margin: 0;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      @media (min-width: 768px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: 'EuclidCircularBRegular', sans-serif;
        height: 100vh;
        justify-content: center;
        margin: 0;
        transition: background-color 300ms ease-in-out;
        width: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased; 
      }
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
/* 
    hr {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border: 0;
      margin: 0;
    } */

    ::-webkit-scrollbar {
      border-radius: 10px;
      height: 7px;
      width: 7px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgb(1 2 3 / 40%);
      border-radius: 10px;
    }
`;
