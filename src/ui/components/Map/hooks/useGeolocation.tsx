import { useEffect } from 'react';
import { useRecoilCallback } from 'recoil';

import { latitudeState, longitudeState } from 'ui/stores/MapStore';

export const useGeolocation = () => {
  const updateCoordinates = useRecoilCallback(
    ({ set }) =>
      (geolocation: GeolocationPosition) => {
        set(latitudeState, geolocation.coords.latitude);
        set(longitudeState, geolocation.coords.longitude);
      },
    []
  );

  useEffect(() => {
    let watchId: number;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateCoordinates);
      watchId = navigator.geolocation.watchPosition(updateCoordinates);
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [updateCoordinates]);
};
