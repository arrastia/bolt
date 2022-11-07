import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Select } from 'ui/components/Select';

import { citiesState } from 'ui/stores/MapStore';

const Icon = styled('img')`
  aspect-ratio: auto 20 / 20;
  height: auto;
  max-width: 100%;
  width: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    transition: transform 0.2s ease-in-out;
  }
`;

export const CountrySelect = () => {
  const cities = useRecoilValue(citiesState);

  const options = cities.map(({ icon, id, name }) => ({ icon: <Icon alt="" src={icon} />, id, label: name, value: id }));

  return <Select options={options} />;
};
