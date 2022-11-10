import styled from 'styled-components';

const Spinner = styled('div')`
  z-index: 1;

  i {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: spin;
    animation-timing-function: ease;
    background: #333;
    border-radius: 4px;
    display: block;
    height: 2px;
    opacity: 0.2;
    position: absolute;
    width: 7px;
  }

  i:nth-child(1) {
    transform: rotate(30deg) translateX(10px);
    animation-delay: 0.08333s;
  }

  i:nth-child(2) {
    transform: rotate(60deg) translateX(10px);
    animation-delay: 0.16667s;
  }

  i:nth-child(3) {
    transform: rotate(90deg) translateX(10px);
    animation-delay: 0.25s;
  }

  i:nth-child(4) {
    transform: rotate(120deg) translateX(10px);
    animation-delay: 0.33333s;
  }

  i:nth-child(5) {
    transform: rotate(150deg) translateX(10px);
    animation-delay: 0.41667s;
  }

  i:nth-child(6) {
    transform: rotate(180deg) translateX(10px);
    animation-delay: 0.5s;
  }

  i:nth-child(7) {
    transform: rotate(210deg) translateX(10px);
    animation-delay: 0.58333s;
  }

  i:nth-child(8) {
    transform: rotate(240deg) translateX(10px);
    animation-delay: 0.66667s;
  }

  i:nth-child(9) {
    transform: rotate(270deg) translateX(10px);
    animation-delay: 0.75s;
  }

  i:nth-child(10) {
    transform: rotate(300deg) translateX(10px);
    animation-delay: 0.83333s;
  }

  i:nth-child(11) {
    transform: rotate(330deg) translateX(10px);
    animation-delay: 0.91667s;
  }

  i:nth-child(12) {
    transform: rotate(360deg) translateX(10px);
    animation-delay: 1s;
  }

  @keyframes spin {
    30% {
      opacity: 1;
      box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.8);
    }
  }
`;

export const Styles = { Spinner };
