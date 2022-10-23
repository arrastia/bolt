import type { CountryCode, Region } from './@types/Country.types';

export interface Country {
  dialCode: string;
  hasAreaCodes?: boolean;
  isAreaCode?: boolean;
  iso2: CountryCode;
  name: string;
  regions: Region[];
}

export class Country {
  constructor({ dialCode, hasAreaCodes, isAreaCode, iso2, name, regions }: Country) {
    this.dialCode = dialCode;
    this.hasAreaCodes = hasAreaCodes;
    this.isAreaCode = isAreaCode;
    this.iso2 = iso2;
    this.name = name;
    this.regions = regions;
  }
}
