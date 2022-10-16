import type { CSSProperties } from 'react';

export interface Slide {
  direction?: CSSProperties['flexDirection'];
  id: string;
  sticker: JSX.Element;
  subtitle: string;
  text: string;
}

export interface CarouselProps {
  slides: Slide[];
}
