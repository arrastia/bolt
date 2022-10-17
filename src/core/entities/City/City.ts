import type { ICountry } from 'core/entities/Country';

export interface City {
  country?: Pick<ICountry, 'iso2' | 'name'>;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

export class City {
  constructor({ country, id, latitude, longitude, name }: City) {
    this.country = country;
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.name = name;
  }
}
