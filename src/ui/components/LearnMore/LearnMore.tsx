import { Fragment, useState } from 'react';

import { car, coin, money } from 'assets/stickers';

import { Button } from 'ui/components/Button';
import { Carousel } from 'ui/components/Carousel';
import { Modal } from 'ui/components/Modal';
import { Sticker } from 'ui/components/Sticker';

import type { CSSProperties } from 'styled-components';

export const LearnMore = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCloseModal = () => setIsVisible(false);

  const handleOpenModal = () => setIsVisible(true);

  const slides = [
    {
      id: 'money-slide',
      sticker: <Sticker data={money} loop={true} />,
      text: 'Earn money',
      subtitle: 'Drive with Bolt and earn extra income.'
    },
    {
      id: 'car-slide',
      sticker: <Sticker data={car} loop={true} />,
      text: 'Drive anytime',
      subtitle: 'Work with your own schedule. No minimum hours and no boss.',
      direction: 'row-reverse' as CSSProperties['flexDirection']
    },
    {
      id: 'coin-slide',
      sticker: <Sticker data={coin} loop={true} />,
      text: 'No monthly fees',
      subtitle: 'No risk, you only pay when you earn.'
    }
  ];

  return (
    <Fragment>
      <Button appearance="secondary" onClick={handleOpenModal}>
        Learn more
      </Button>

      <Modal isVisible={isVisible} onClose={handleCloseModal}>
        <Carousel slides={slides} />
      </Modal>
    </Fragment>
  );
};
