import type { ICountry } from 'core/entities/Country';

export type Coordinates = { latitude: number; longitude: number };
export interface City {
  coordinates: Coordinates;
  country: ICountry;
  id: string;
  name: string;
}

export class City {
  constructor({ coordinates, country, id, name }: City) {
    this.coordinates = coordinates;
    this.country = country;
    this.id = id;
    this.name = name;
  }
}
