import styled from 'styled-components';

const Section = styled('div')`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    height: fit-content;
    justify-content: space-between;
    margin: auto 2rem;
    width: 100%;

    /* h1 {
      font-size: clamp(1.5rem, 6vw, 3.5rem);
      font-weight: bold;
    } */

    h2 {
      font-size: clamp(0.8rem, 3vw, 1.25rem);
      font-weight: normal;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      animation: 2s ease 0s normal forwards 1 fadein;
    }

    .content-flex {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      /* justify-content: space-between; */
    }

    .action-buttons {
      align-items: center;
      display: flex;
      gap: 1rem;
      justify-content: start;
      margin-top: 1rem;
      animation: 2.5s ease 0s normal forwards 1 fadein;
    }

    .form-flex {
      animation: 2.5s ease 0s normal forwards 1 fadein;
    }

    @keyframes fadein {
      from {
        opacity: 0;
        transform: translateY(1rem);
      }
      66% {
        opacity: 0;
        transform: translateY(1rem);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
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
