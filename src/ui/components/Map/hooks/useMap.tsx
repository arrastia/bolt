import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import mapBox from 'mapbox-gl';

import { useGeolocation } from './useGeolocation';

import { isDarkModeState } from 'ui/stores/UserStore';
import { latitudeState, longitudeState } from 'ui/stores/MapStore';

import { MAP_DARK_THEME, MAP_LIGHT_THEME } from 'ui/styles/themes/map';

import type { Map } from 'mapbox-gl';
import type { RefObject } from 'react';

// mapBox.accessToken = process.env.REACT_APP_MAP_API_KEY as string;
mapBox.accessToken = 'pk.eyJ1IjoiYXJyYXN0aWEiLCJhIjoiY2w3c3gxNm1iMGxudDN2b3Y5ODE1ZHBiZSJ9.7fmDsE_wSf46MPYxWun9Og';

const MAP_ZOOM = 9;

export const useMap = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);

  useGeolocation();

  const latitude = useRecoilValue(latitudeState);
  const longitude = useRecoilValue(longitudeState);

  const map = useRef<Map | null>(null);
  const mapContainer = useRef<HTMLElement | string>('');

  useEffect(() => {
    if (map.current) return;

    map.current = new mapBox.Map({
      center: [longitude, latitude],
      container: mapContainer.current,
      style: MAP_LIGHT_THEME,
      zoom: MAP_ZOOM
    });
  });

  useEffect(() => {
    map.current?.flyTo({ center: [longitude, latitude], zoom: MAP_ZOOM });
  }, [latitude, longitude]);

  useEffect(() => {
    map.current?.setStyle(!isDarkMode ? MAP_LIGHT_THEME : MAP_DARK_THEME);
  }, [isDarkMode]);

  return mapContainer as RefObject<HTMLDivElement>;
};
