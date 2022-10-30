type Coordinate = { latitude: number; longitude: number };

export interface LocationProps {
  icon: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface LocationState extends Coordinate {
  id: string;
}
