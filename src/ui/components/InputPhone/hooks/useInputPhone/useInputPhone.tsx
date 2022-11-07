import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { useCountries } from '../useCountries';

import { selectedCountryState } from 'ui/stores/FormStore';

import { formatNumber } from './utils/formatNumber';

import type { CountryCode } from 'core/entities/Country';

export const useInputPhone = () => {
  const [country, setCountry] = useRecoilState(selectedCountryState);

  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const { findCountryByCode, getCountryByDialCode } = useCountries();

  const handleSelectCountry = (countryCode: CountryCode) => {
    const selectedCountry = findCountryByCode(countryCode);

    setIsPanelVisible(false);
    setCountry(selectedCountry);
    setPhoneNumber(selectedCountry?.phoneCode || '');
  };

  const handleInputChange = (value: string) => {
    const formatted = country ? formatNumber(value, country.countryCode) : '';
    const selectedCountry = getCountryByDialCode(formatted.length > 0 ? formatted : value);

    setCountry(selectedCountry ? selectedCountry : country);
    setPhoneNumber(formatted.length > 0 ? formatted : value);
  };

  const togglePanel = (isVisible: boolean) => setIsPanelVisible(isVisible);

  return { handleInputChange, handleSelectCountry, isPanelVisible, phoneNumber, togglePanel };
};
