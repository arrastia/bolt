import { useState } from 'react';

import { Styles } from './DynamicIsland.styles';

import { car, coin, money } from 'assets/stickers';
import { menu } from 'assets/icons';

import { Carousel } from 'ui/components/Carousel';
import { Sticker } from 'ui/components/Sticker';

import type { CSSProperties } from 'react';
import { ThemeButton } from '../ThemeButton';

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

export const DynamicIsland = () => {
  const [animationStatus, setAnimationStatus] = useState<'idle' | 'expanded'>('expanded');
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleAnimationEnd = () => (animationStatus === 'idle' ? setIsContentVisible(false) : null);

  const onExpand = () => {
    setIsContentVisible(true);
    setAnimationStatus('expanded');
  };

  const onCollapse = () => setAnimationStatus('idle');

  const renderSearch = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      style={{
        display: 'block',
        height: '16px',
        width: '16px',
        fill: 'currentColor'
      }}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
        opacity=".8"></path>
    </svg>
  );

  const renderSettings = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      style={{
        display: 'block',
        height: '16px',
        width: '16px',
        fill: 'rgb(34, 34, 34)'
      }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </svg>
  );

  return (
    <Styles.Island
      onAnimationEnd={handleAnimationEnd}
      onClick={() => (animationStatus === 'expanded' ? onCollapse() : onExpand())}
      status={animationStatus}>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100%',
          alignItems: 'stretch',
          height: '56px'
        }}>
        <Styles.Content>
          <Styles.Button>
            <Styles.Search>{renderSearch()}</Styles.Search>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                paddingLeft: '2px',
                width: '100%'
              }}>
              <Styles.Title>Why Bolt?</Styles.Title>
              <Styles.Subtitle>Learn more about us!</Styles.Subtitle>
            </div>
          </Styles.Button>
        </Styles.Content>
        <Styles.ActionButtons>
          {/* <Styles.ActionButton style={{ margin: 0 }}>{renderSettings()}</Styles.ActionButton> */}
          <Styles.ActionButton>
            <ThemeButton />
          </Styles.ActionButton>
        </Styles.ActionButtons>
      </div>
      {animationStatus === 'expanded' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: '16px',
            position: 'relative'
          }}>
          <Carousel slides={slides} />
        </div>
      ) : null}
    </Styles.Island>
  );
};
