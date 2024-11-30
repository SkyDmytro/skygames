'use client';

import { useCountryStore } from '@/features/countriesGame/stores/countryStore';
import { useScoreStore } from '@/features/countriesGame/stores/scoreStore';
import { getIsCountryGuessed } from '@/features/countriesGame/utils/functions';
import { cn } from '@/lib/cn';

import { LosePopUp } from './ui/LosePopUp';
import { VictoryPopup } from './ui/VictoryPopup';

export const PopUpController = () => {
  const { health } = useScoreStore();
  const { countryName, guessedLetters } = useCountryStore();
  const isGuessed = getIsCountryGuessed(guessedLetters, countryName);
  const isLost = health === 0;

  return (
    <div
      className={cn(
        'absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        !isGuessed && !isLost && 'hidden',
        isLost && 'block',
        isGuessed && 'block',
      )}
    >
      {isGuessed && <VictoryPopup />}
      {isLost && <LosePopUp />}
    </div>
  );
};
