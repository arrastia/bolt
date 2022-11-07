import { useRecoilValue } from 'recoil';

import { Styles } from './Locations.styles';

import { Location } from './components/Location';

import { citiesState } from 'ui/stores/MapStore';

export const Locations = () => {
  const locations = useRecoilValue(citiesState);

  return (
    <Styles.Container>
      <Styles.Grid role="radiogroup">
        {locations.map(({ coordinates: { latitude, longitude }, icon, id, name }) => (
          <Location icon={icon} id={id} key={id} latitude={latitude} longitude={longitude} name={name} />
        ))}
      </Styles.Grid>
    </Styles.Container>
  );
};
