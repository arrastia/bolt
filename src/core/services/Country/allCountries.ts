import { CountryRepository } from 'core/repositories/Country';

import { Country } from 'core/entities/Country';

export const allCountries = async () => {
  const response = await CountryRepository.allCountries();

  return response
    .map(({ dialCode, iso2, ...rest }) => new Country({ countryCode: iso2, phoneCode: dialCode, ...rest }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
