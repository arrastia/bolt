import { useState } from 'react';

import { Styles } from './DynamicIsland.styles';

import { menu } from 'assets/icons';

export const DynamicIsland = () => {
  const [animationStatus, setAnimationStatus] = useState<'idle' | 'expanded'>('idle');
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
      <Styles.Content>
        <Styles.Button>
          <Styles.Search>{renderSearch()}</Styles.Search>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              paddingLeft: '2px',
              minWidth: 0
            }}>
            {/* <div style={{ display: 'flex', minWidth: '50px' }}> */}
            <Styles.Text>Why Bolt?</Styles.Text>
            {/* </div> */}
            <div
              style={{
                display: 'flex',
                minWidth: '0',
                gap: '5px',

                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
              <Styles.Text2>Learn more about us!</Styles.Text2>
            </div>
          </div>
        </Styles.Button>
      </Styles.Content>
      <Styles.Flex>
        <Styles.ActionButtons>
          <Styles.ActionButton style={{ margin: 0 }}>
            <img src={menu} alt="" style={{ height: 16, width: 16 }} />
          </Styles.ActionButton>
          <Styles.ActionButton>{renderSettings()}</Styles.ActionButton>
        </Styles.ActionButtons>
      </Styles.Flex>
    </Styles.Island>
  );
};
