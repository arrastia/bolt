import { countryWebConfig } from 'configuration/www/Country';

import { HTTPUtils } from 'core/_utils/HTTPUtils';
import { URLUtils } from 'core/_utils/URLUtils';

import type { CountryResponse } from 'core/entities/Country';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const allCountries = async (): Promise<CountryResponse[]> => {
  const { data } = await get({ url: parseURL({ url: countryWebConfig.all }) });

  return data;
};

export const CountryRepository = { allCountries };
