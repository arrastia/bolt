import { useRef } from 'react';

import { Styles } from './Carousel.styles';

import { Dots } from './components/Dots';

import type { CarouselProps } from './@types/Carousel.types';

export const Carousel = ({ slides }: CarouselProps) => {
  const slidesRefs = useRef<HTMLDivElement[]>([]);

  const goToSlide = (index: number) => slidesRefs.current[index].scrollIntoView({ behavior: 'smooth' });

  return (
    <Styles.Slider>
      <Styles.Slides>
        {slides.map(({ direction, id, sticker, subtitle, text }) => (
          <Styles.Slide direction={direction} key={id} ref={(element: HTMLDivElement) => (slidesRefs.current = [...slidesRefs.current, element])}>
            {sticker}
            <Styles.Text>
              <Styles.Title>{text}</Styles.Title>
              <Styles.Subtitle>{subtitle}</Styles.Subtitle>
            </Styles.Text>
          </Styles.Slide>
        ))}
      </Styles.Slides>
      <Dots onClick={goToSlide} slides={slides} />
    </Styles.Slider>
  );
};
