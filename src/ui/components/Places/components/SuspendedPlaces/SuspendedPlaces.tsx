import { Styles } from './SuspendedPlaces.styles';

import { clock } from 'assets/stickers';

import { Sticker } from 'ui/components/Sticker';

export const SuspendedPlaces = () => {
  return (
    <Styles.Suspended>
      <Sticker autoplay={true} data={clock} loop={true} size={50} />
    </Styles.Suspended>
  );
};
