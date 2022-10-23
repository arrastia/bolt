import { cityWebConfig } from 'configuration/www/City';

import { HTTPUtils } from 'core/_utils/HTTPUtils';
import { URLUtils } from 'core/_utils/URLUtils';

import type { City } from 'core/entities/City';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const allCities = async (): Promise<City[]> => {
  const { data } = await get({ url: parseURL({ url: cityWebConfig.all }) });

  return data;
};

export const CityRepository = { allCities };
