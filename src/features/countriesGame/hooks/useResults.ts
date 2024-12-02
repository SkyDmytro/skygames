import { useEffect, useState } from 'react';

import { useCountryStore } from '../stores/countryStore';
import { useScoreStore } from '../stores/scoreStore';
import { getIsCountryGuessed } from '../utils/functions';

export const useResults = () => {
  const { guessedLetters, countryName } = useCountryStore();
  const { health } = useScoreStore();

  const [isGuessed, setIsGuessed] = useState(false);
  const [isLost, setIsLost] = useState(false);

  useEffect(() => {
    const isGuessed = getIsCountryGuessed(guessedLetters, countryName);
    setIsGuessed(isGuessed);
  }, [guessedLetters]);

  useEffect(() => {
    const isLost = health === 0;
    setIsLost(isLost);
  }, [health]);
  return {
    isGuessed,
    isLost,
  };
};
