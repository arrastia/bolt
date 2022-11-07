import { useRecoilValue } from 'recoil';

import { Styles } from './Locations.styles';

import { Location } from './components/Location';

import { citiesState } from 'ui/stores/MapStore';

export const Locations = () => {
  const locations = useRecoilValue(citiesState);

  return (
    <Styles.Container>
      <Styles.Grid role="radiogroup">
        {locations.map(({ coordinates: { latitude, longitude }, id, name }) => (
          <Location
            icon="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            id={id}
            key={id}
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
        ))}
      </Styles.Grid>
    </Styles.Container>
  );
};
