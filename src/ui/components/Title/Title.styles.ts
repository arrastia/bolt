import styled from 'styled-components';

const Title = styled('h1')`
  --red: #34d186;
  /* --green: #636e7b;
  --yellow: #aeaeb1; 
  --green: #545d68; 
  --yellow: #545d68;*/
  --speed: 0.65s;

  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  line-height: 0.8;
  margin: 0;

  span {
    font-size: clamp(1.75rem, 1rem + 7vmin, 7.5rem);

    --color: var(--red);
    color: var(--color);
    position: relative;
    clip-path: inset(-20% 0);
    animation-name: text-reveal, shimmy;
    animation-duration: var(--speed);
    animation-delay: calc((0.5 + var(--index)) * (var(--speed) / 3));
    animation-fill-mode: both;
    animation-timing-function: steps(1), ease-out;
  }

  span:after {
    content: '';
    position: absolute;
    inset: -20% 0;
    background-color: var(--color);
    animation-name: block-reveal;
    animation-duration: var(--speed);
    animation-delay: calc((0.5 + var(--index)) * (var(--speed) / 3));
    animation-fill-mode: both;
  }

  span:nth-of-type(1) {
    --color: ${({ theme: { colors } }) => colors.text};
    --index: 0;
  }

  span:nth-of-type(2) {
    --color: ${({ theme: { colors } }) => colors.text};
    --index: 1;
  }

  span:nth-of-type(3) {
    --color: var(--red);
    --index: 2;
  }

  @keyframes shimmy {
    0% {
      transform: translateX(-1ch);
    }
  }

  @keyframes text-reveal {
    0% {
      color: transparent;
    }
    50%,
    100% {
      color: var(--color);
    }
  }

  @keyframes block-reveal {
    0% {
      transform: translateX(-110%);
    }
    45%,
    55% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(110%);
    }
  }
`;

export const Styles = { Title };
