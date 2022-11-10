import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

import { Styles } from './CountrySelect.styles';

import { Select } from 'ui/components/Select';

import { citiesState, latitudeState, longitudeState } from 'ui/stores/MapStore';
import { formFieldState, isAttemptedState } from 'ui/stores/FormStore';

import type { Coordinates } from 'core/entities/City';
import { useCallback } from 'react';
import type { MenuOption } from 'ui/components/Menu';

export const CountrySelect = () => {
  const cities = useRecoilValue(citiesState);

  const [city, setCity] = useRecoilState(formFieldState('city'));
  const [isAttempted, setIsAttempted] = useRecoilState(isAttemptedState);

  const setLocation = useRecoilCallback(
    ({ set }) =>
      ({ latitude, longitude }: Coordinates) => {
        set(latitudeState, latitude);
        set(longitudeState, longitude);
      },
    []
  );

  const onOptionChange = useCallback(
    (option: MenuOption | null) => {
      if (!option) return;

      const { latitude, longitude } = option.extra;

      setLocation({ latitude, longitude });
      setCity(option.id);
      setIsAttempted(false);
    },
    [setIsAttempted, setLocation, setCity]
  );

  const renderIcon = (icon: string) => <Styles.Icon src={icon} />;

  return (
    <Select
      onOptionChange={onOptionChange}
      options={cities.map(({ icon, id, name, coordinates }) => ({ extra: { ...coordinates }, icon: renderIcon(icon), id, label: name, value: id }))}
      status={isAttempted && city === '' ? 'error' : undefined}
    />
  );
};
