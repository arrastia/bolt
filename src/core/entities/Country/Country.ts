import type { CountryCode, Region } from './@types/Country.types';

export interface Country {
  countryCode: CountryCode;
  hasAreaCodes?: boolean;
  id: string;
  isAreaCode?: boolean;
  name: string;
  phoneCode: string;
  regions: Region[];
}

export class Country {
  constructor({ countryCode, hasAreaCodes, id, isAreaCode, name, phoneCode, regions }: Country) {
    this.countryCode = countryCode;
    this.hasAreaCodes = hasAreaCodes;
    this.id = id;
    this.isAreaCode = isAreaCode;
    this.name = name;
    this.phoneCode = phoneCode;
    this.regions = regions;
  }
}
