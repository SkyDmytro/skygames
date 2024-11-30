'use client';

import { useEffect } from 'react';

import { useCountryStore } from '../stores/countryStore';
import { CountryType } from '../types/countryType';
import { CountryPageHeader } from './CountryPageHeader/CountryPageHeader';
import { GuessedLettersComponent } from './GuessedLettersComponent/GuessedLettersComponent';
import { LettersBlock } from './LettersComponent/LettersBlock';

export const CountryGuesserPage = ({
  countryName,
}: Pick<CountryType, 'countryName'>) => {
  const { setCountry } = useCountryStore();
  console.log(countryName);

  useEffect(() => {
    setCountry(countryName);
  }, [countryName]);
  return (
    <section className="flex flex-col items-center justify-between w-screen h-screen">
      <CountryPageHeader />
      <GuessedLettersComponent />
      <LettersBlock />
    </section>
  );
};
