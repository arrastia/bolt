import { CityRepository } from 'core/repositories/City';

export const allCities = async () => {
  return await CityRepository.allCities();
};
