import { parsePhoneNumberFromString } from 'libphonenumber-js';

import type { CountryCode } from 'core/entities/Country';

export const formatNumber = (phoneNumber: string, iso2: CountryCode) => {
  let formattedPhoneNumber = phoneNumber;

  if (phoneNumber.length > 0) {
    if (!formattedPhoneNumber.startsWith('+')) {
      formattedPhoneNumber = `+${formattedPhoneNumber}`;
    }
    if (formattedPhoneNumber.startsWith('+00')) {
      formattedPhoneNumber = formattedPhoneNumber.replace('00', '');
    }
    if (formattedPhoneNumber.startsWith('00')) {
      formattedPhoneNumber = formattedPhoneNumber.replace('00', '+');
    }
  }

  const parsedPhoneNumber = parsePhoneNumberFromString(formattedPhoneNumber, iso2);

  try {
    formattedPhoneNumber = parsedPhoneNumber?.format('INTERNATIONAL') || '';
  } catch (e) {
    formattedPhoneNumber = formattedPhoneNumber.replace(/\(+-()\)/g, '');
  }

  return formattedPhoneNumber;
};
