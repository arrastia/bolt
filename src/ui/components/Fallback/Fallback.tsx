import { clock } from 'assets/stickers';

import { Styles } from './Fallback.styles';

import { Sticker } from 'ui/components/Sticker';

import { useBlockScroll } from 'ui/hooks/useBlockScroll';

export const Fallback = () => {
  useBlockScroll();

  return (
    <Styles.Container>
      <Sticker autoplay={true} data={clock} loop={true} />
    </Styles.Container>
  );
};
