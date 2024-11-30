'use server';

import { getContryByIdRequest } from '@/features/countriesGame/api/getCountryByIdRequest';
import { CountryGuesserPage } from '@/features/countriesGame/components/CountryGuesserPage';
import { CountryType } from '@/features/countriesGame/types/countryType';

export const CountryGuesser = async () => {
  const countryId = Math.floor(Math.random() * 193);
  const country: CountryType = await getContryByIdRequest(countryId);

  return <CountryGuesserPage countryName={country.countryName} />;
};

export default CountryGuesser;
