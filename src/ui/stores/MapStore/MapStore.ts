import { atom } from 'recoil';

const TALLINN_LATITUDE = 59.436962;
const TALLINN_LONGITUDE = 24.753574;

export const latitudeState = atom({
  key: 'latitudeState',
  default: TALLINN_LATITUDE
});

export const longitudeState = atom({
  key: 'longitude',
  default: TALLINN_LONGITUDE
});
