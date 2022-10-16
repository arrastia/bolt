import type { Slide } from 'ui/components/Carousel';

export interface DotsProps {
  onClick: (index: number) => void;
  slides: Slide[];
}
