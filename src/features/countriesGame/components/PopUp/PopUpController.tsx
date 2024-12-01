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
        'absolute z-40 w-full h-full flex justify-center items-center bg-black/70 text-blue-500',
        !isGuessed && !isLost && 'hidden',
        isLost && 'block',
        isGuessed && 'block',
      )}
    >
      <div className="z-50 w-1/2 h-1/2">
        {isGuessed && <VictoryPopup health={health} />}
        {isLost && <LosePopUp />}
      </div>
    </div>
  );
};
