import { Suspense, useId, useRef } from 'react';
import Player from 'react-animated-stickers';

import { Styles } from './Sticker.styles';

import type { StickerProps, StickerRef } from './@types/Sticker.types';

export const Sticker = <T,>({ autoplay = true, data, fallback = null, loop = false, size = 160, onClick }: StickerProps<T>) => {
  const id = useId();

  const stickerRef = useRef<StickerRef>(null);

  const handleClick = () => {
    play();
    onClick?.();
  };

  const play = () => stickerRef.current?.play();

  return (
    <Suspense fallback={fallback}>
      <Styles.Container onClick={handleClick} size={size}>
        <Player options={{ autoplay, fileId: id, height: size, loop, stringData: JSON.stringify(data), width: size }} ref={stickerRef} />
      </Styles.Container>
    </Suspense>
  );
};
