'use server';

import { getContryByIdRequest } from '@/features/countriesGame/api/getCountryByIdRequest';
import { CountryGuesserPage } from '@/features/countriesGame/components/CountryGuesserPage';
import { CountryType } from '@/features/countriesGame/types/countryType';
import { AMOUNT_OF_COUNTRIES } from '@/features/countriesGame/utils/constants';

export const CountryGuesser = async () => {
  const countryId = Math.floor(Math.random() * AMOUNT_OF_COUNTRIES) + 1;
  const country: CountryType = await getContryByIdRequest(countryId);

  return <CountryGuesserPage countryName={country.countryName} />;
};

export default CountryGuesser;
