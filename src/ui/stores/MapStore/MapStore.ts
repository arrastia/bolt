import { atom, selector, selectorFamily } from 'recoil';

import { CityService } from 'core/services/City';
import { CountryService } from 'core/services/Country';

const TALLINN_LATITUDE = 59.436962;
const TALLINN_LONGITUDE = 24.753574;

export const latitudeState = atom({
  key: 'latitudeState',
  default: TALLINN_LATITUDE
});

export const longitudeState = atom({
  key: 'longitude',
  default: TALLINN_LONGITUDE
});

export const countriesState = selector({
  key: 'countriesState',
  get: async () => await CountryService.allCountries()
});

export const citiesState = selector({
  key: 'citiesState',
  get: async () => await CityService.allCities()
});

export const selectedCityState = atom({
  key: 'selectedCityState',
  default: ''
});

export const isSelectedState = selectorFamily({
  key: 'isSelected',
  get:
    (id: string) =>
    ({ get }) =>
      get(selectedCityState) === id
});
