import type { ICountry } from 'core/entities/Country';

export type CoordinatesResponse = { _latitude: number; _longitude: number };

export interface CityResponse {
  coordinates: CoordinatesResponse;
  country: ICountry;
  icon: string;
  id: string;
  name: string;
  position: number;
}
