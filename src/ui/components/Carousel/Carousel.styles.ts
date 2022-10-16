import styled from 'styled-components';

import type { CSSProperties } from 'react';

const Slider = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: clamp(300px, 80vw, 800px);
  overflow: hidden;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Slides = styled('div')`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  transition: transform 0.5s ease;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    align-items: center;
    border-radius: calc(1rem - 7px);
    display: flex;
    flex-shrink: 0;
    font-size: 100px;
    justify-content: center;
    margin: 0 1rem;
    padding: 1rem;
    position: relative;
    scroll-snap-align: start;
    transform: scale(1);
    transform-origin: center center;
    transition: transform 0.5s;
    width: 100%;
  }
`;

const Slide = styled('div')<{ direction?: CSSProperties['flexDirection'] }>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
  flex-direction: ${({ direction }) => direction};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Text = styled('div')`
  display: flex;
  flex: 0.8;
  flex-direction: column;
`;

const Title = styled('h2')`
  font-size: clamp(1.5rem, 6vw, 3.5rem);
  font-weight: bold;
`;

const Subtitle = styled('p')`
  font-size: clamp(1rem, 4vw, 1.6rem);
`;

const Container = styled('ul')`
  scroll-snap-type: x mandatory;
  scroll-padding: 0 24px;
  display: flex;
  overflow: auto;

  .carousel-item {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Styles = { Text, Container, Slider, Slides, Title, Slide, Subtitle };
