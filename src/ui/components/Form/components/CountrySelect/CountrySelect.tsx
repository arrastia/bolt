import { useRecoilValue } from 'recoil';

import { Select } from 'ui/components/Select';

import { citiesState } from 'ui/stores/MapStore';

export const CountrySelect = () => {
  const cities = useRecoilValue(citiesState);

  const options = cities.map(({ id, name }) => ({ id, label: name, value: id }));

  return <Select options={options} />;
};
