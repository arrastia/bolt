import { useRecoilValue } from 'recoil';

import { countriesState } from 'ui/stores/MapStore';

import type { Country, CountryCode, Region } from 'core/entities/Country';

export const useCountries = () => {
  const countries = useRecoilValue(countriesState);

  const findCountryByCode = (code?: CountryCode) => countries.find(({ countryCode }) => countryCode === code);

  const getCountryByDialCode = (phoneNumber: string) => {
    let telephone = phoneNumber;

    if (phoneNumber.startsWith('+00')) {
      telephone = phoneNumber.substring(5, 3);
    } else if (phoneNumber.startsWith('+')) {
      telephone = phoneNumber.substring(6, 1);
    } else if (phoneNumber.startsWith('00')) {
      telephone = phoneNumber.substring(5, 2);
    } else {
      telephone = phoneNumber.substring(5, 0);
    }

    return countries.find(({ phoneCode }) => phoneCode.startsWith(`+${telephone.replace(' ', '')}`));
  };

  const getCountriesByRegions = (regions: Region[] | Region): Country[] => {
    if (typeof regions === 'string') return countries.filter(country => country.regions.includes(regions));

    return countries.filter(country => regions.map(region => country.regions.includes(region)).some(el => el));
  };

  return { countries, findCountryByCode, getCountriesByRegions, getCountryByDialCode };
};
