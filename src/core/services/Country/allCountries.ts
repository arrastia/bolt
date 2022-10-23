import { CountryRepository } from 'core/repositories/Country';

import type { Country, Region } from 'core/entities/Country';

export const allCountries = async (regions?: Region | Region[]) => {
  const countries = await CountryRepository.allCountries();

  if (!regions) return countries;

  return getCountriesByRegions(countries, regions);
};

const getCountriesByRegions = (countries: Country[], regions: Region[] | Region): Country[] => {
  if (typeof regions === 'string') return countries.filter(country => country.regions.includes(regions));

  return countries.filter(country => regions.map(region => country.regions.includes(region)).some(el => el));
};
