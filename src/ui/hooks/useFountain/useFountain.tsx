import { useEffect, useRef } from 'react';

import { createFountainElement } from './utils/createFountainElement';

import type { FountainType } from './@types/Fountain.types';

export const useFountain = <T extends HTMLElement>(imageUrl: string | string[], isDisabled?: boolean, type: FountainType = 'emoji') => {
  const ref = useRef<T>(null);
  const resolvedImageUrl = imageUrl;

  useEffect(() => {
    if (ref.current && resolvedImageUrl) return createFountainElement(ref.current, resolvedImageUrl, type, isDisabled);
  }, [resolvedImageUrl, isDisabled, type]);

  return ref;
};
