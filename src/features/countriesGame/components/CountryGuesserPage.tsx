'use client';

import { useResults } from '@/features/countriesGame/hooks/useResults';
import { useCountryStore } from '@/features/countriesGame/stores/countryStore';
import { useScoreStore } from '@/features/countriesGame/stores/scoreStore';
import { useTimerStore } from '@/features/countriesGame/stores/timerStore';
import { CountryType } from '@/features/countriesGame/types/countryType';

import { useEffect } from 'react';

import { usePopUpStore } from '../stores/usePopUpStore';
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
  const { openPopupByType } = usePopUpStore();

  useEffect(() => {
    if (isGuessed || isLost) {
      setCountry('');
      stopTimer();
    }
  }, [isGuessed, isLost]);

  useEffect(() => {
    setCountry(countryName);
  }, [countryName]);

  const handleHelpPopUp = () => {
    openPopupByType('help');
  };
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-between">
      <PopUpController
        isGuessed={isGuessed}
        isLost={isLost}
        health={health}
        time={time}
      />
      <CountryPageHeader togglePopup={handleHelpPopUp} />
      <GuessedLettersComponent />
      <LettersBlock />
    </section>
  );
};
