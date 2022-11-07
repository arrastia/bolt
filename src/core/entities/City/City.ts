import type { ICountry } from 'core/entities/Country';

export type Coordinates = { latitude: number; longitude: number };
export interface City {
  coordinates: Coordinates;
  country: ICountry;
  icon: string;
  id: string;
  name: string;
  position: number;
}

export class City {
  constructor({ coordinates, country, icon, id, name, position }: City) {
    this.coordinates = coordinates;
    this.country = country;
    this.icon = icon;
    this.id = id;
    this.name = name;
    this.position = position;
  }
}
