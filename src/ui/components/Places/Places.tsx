import { useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { citiesState } from 'ui/stores/MapStore/MapStore';
import { Item } from './components/Item/Item';
import { Styles } from './Places.styles';

const data = [
  {
    id: 1,
    name: 'Tallinn, Estonia',
    icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
    isActive: true
  },
  {
    id: 2,
    name: 'Rakvere, Estonia',
    icon: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
    isActive: false
  },
  {
    id: 3,
    name: 'Madrid, Spain',
    icon: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
    isActive: false
  },
  {
    id: 4,
    name: 'Donosti, Euskal Herria',
    icon: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg',
    isActive: false
  },
  {
    id: 5,
    name: 'Boston, USA',
    icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
    isActive: false
  },
  {
    id: 6,
    name: 'Bratislava, Slovakia',
    icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
    isActive: false
  },
  {
    id: 7,
    name: 'Tokyo, Japan',
    icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
    isActive: false
  },
  {
    id: 8,
    name: 'Nairobi, Kenya',
    icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
    isActive: false
  },
  {
    id: 9,
    name: 'Rosario, Argentina',
    icon: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
    isActive: false
  }
];

export const Places = () => {
  const cities = useRecoilValue(citiesState);

  return (
    <Styles.Container>
      <Styles.Grid role="radiogroup">
        {cities.map(({ country, id, latitude, longitude, name }) => (
          <Item
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
