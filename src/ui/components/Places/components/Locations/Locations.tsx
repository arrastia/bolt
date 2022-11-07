import { useRecoilValue } from 'recoil';

import { Styles } from './Locations.styles';

import { Location } from '../Location';

import { citiesState } from 'ui/stores/MapStore';

export const Locations = () => {
  const cities = useRecoilValue(citiesState);

  return (
    <Styles.Grid role="radiogroup">
      {cities.map(({ coordinates: { latitude, longitude }, icon, id, name }) => (
        <Location icon={icon} id={id} key={id} latitude={latitude} longitude={longitude} name={name} />
      ))}
    </Styles.Grid>
  );
};
