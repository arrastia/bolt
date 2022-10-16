import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { Styles } from './Dots.styles';

import type { DotsProps } from './@types/Dots.types';

export const Dots = ({ onClick, slides }: DotsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const indicatorRef = useRef<HTMLLIElement>(null);

  const handleAddClassName = () => indicatorRef.current?.classList.add('indicator-width');

  const handleRemoveClassName = () => indicatorRef.current?.classList.remove('indicator-width');

  const onChangeActiveIndex = (index: number) => {
    flushSync(() => {
      setActiveIndex(index);
      onClick(index);
    });

    handleAddClassName();
  };

  return (
    <Styles.Component>
      <Styles.OrderedList>
        <Styles.Indicator activeIndex={activeIndex} onTransitionEnd={handleRemoveClassName} ref={indicatorRef} />
        {slides.map(({ id }, index) => (
          <Styles.Dot key={id} onClick={() => onChangeActiveIndex(index)} />
        ))}
      </Styles.OrderedList>
    </Styles.Component>
  );
};
