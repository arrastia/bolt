import { City } from 'core/entities/City';

import { CityRepository } from 'core/repositories/City';

import type { ICity } from 'core/entities/City';

export const allCities = async (): Promise<ICity[]> => {
  const response = await CityRepository.allCities();

  return response
    .map(city => {
      const { coordinates, country, icon, id, name, position } = city;
      const { _latitude, _longitude } = coordinates;

      return new City({ coordinates: { latitude: _latitude, longitude: _longitude }, country, icon, id, name, position });
    })
    .sort((a, b) => a.position - b.position);
};
