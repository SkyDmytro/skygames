'use client';

import { useEffect } from 'react';

import { useCountryStore } from '../stores/countryStore';
import { useScoreStore } from '../stores/scoreStore';
import { useTimerStore } from '../stores/timerStore';
import { CountryType } from '../types/countryType';
import { getIsCountryGuessed } from '../utils/functions';
import { CountryPageHeader } from './CountryPageHeader/CountryPageHeader';
import { GuessedLettersComponent } from './GuessedLettersComponent/GuessedLettersComponent';
import { LettersBlock } from './LettersComponent/LettersBlock';
import { PopUpController } from './PopUp/PopUpController';

export const CountryGuesserPage = ({
  countryName,
}: Pick<CountryType, 'countryName'>) => {
  const { health } = useScoreStore();
  const { guessedLetters, setCountry } = useCountryStore();
  const { stopTimer, time } = useTimerStore();
  const isGuessed = getIsCountryGuessed(guessedLetters, countryName);
  const isLost = health === 0;

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
    <section className="flex flex-col items-center justify-between w-screen h-screen">
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
