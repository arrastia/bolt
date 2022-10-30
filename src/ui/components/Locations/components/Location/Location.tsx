import { useRecoilCallback, useRecoilValue } from 'recoil';

import { isSelectedState, latitudeState, longitudeState, selectedCityState } from 'ui/stores/MapStore/MapStore';

import type { LocationProps, LocationState } from './@types/Location.types';
import { Styles } from './Location.styles';

export const Location = ({ icon, id, latitude, longitude, name }: LocationProps) => {
  const isSelected = useRecoilValue(isSelectedState(id));

  const setLocation = useRecoilCallback(
    ({ set }) =>
      ({ id, latitude, longitude }: LocationState) => {
        set(latitudeState, latitude);
        set(longitudeState, longitude);
        set(selectedCityState, id);
      },
    []
  );

  const onSelect = () => setLocation({ id, latitude, longitude });

  return (
    <Styles.Location onClick={onSelect}>
      <Styles.Container>
        <Styles.Icon alt={name} src={icon} />
        <Styles.Text>
          <Styles.TextIndicator isActive={isSelected}>{name}</Styles.TextIndicator>
        </Styles.Text>
      </Styles.Container>
    </Styles.Location>
  );
};
