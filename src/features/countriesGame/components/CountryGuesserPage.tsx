'use client';

import { useEffect } from 'react';

import { useResults } from '../hooks/useResults';
import { useCountryStore } from '../stores/countryStore';
import { useScoreStore } from '../stores/scoreStore';
import { useTimerStore } from '../stores/timerStore';
import { CountryType } from '../types/countryType';
import { CountryPageHeader } from './CountryPageHeader/CountryPageHeader';
import { GuessedLettersComponent } from './GuessedLettersComponent/GuessedLettersComponent';
import { LettersBlock } from './LettersComponent/LettersBlock';
import { PopUpController } from './PopUp/PopUpController';

export const CountryGuesserPage = ({
  countryName,
}: Pick<CountryType, 'countryName'>) => {
  const { health } = useScoreStore();
  const { isGuessed, isLost } = useResults();
  const { setCountry } = useCountryStore();
  const { stopTimer, time } = useTimerStore();

  useEffect(() => {
    if (isGuessed || isLost) {
      setCountry('');
      stopTimer();
    }
  }, [isGuessed, isLost]);

  useEffect(() => {
    setCountry(countryName);
  }, [countryName]);

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-between">
      <PopUpController
        isGuessed={isGuessed}
        isLost={isLost}
        health={health}
        time={time}
      />
      <CountryPageHeader />
      <GuessedLettersComponent />
      <LettersBlock />
    </section>
  );
};
